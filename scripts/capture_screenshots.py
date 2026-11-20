#!/usr/bin/env python3
"""Capture real screenshots of the operator's live projects and GitHub repos.

Output: site/public/projects/<name>.webp (1440x900 viewport, quality 82).
Run: python3 scripts/capture_screenshots.py
Read-only navigation of public pages. No logins, no form submission.
"""
import pathlib
import sys

from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "projects"
OUT.mkdir(parents=True, exist_ok=True)

TARGETS = [
    ("mengabdi", "https://mengabdi.ppi.id/", None),
    ("draftmind", "https://draftmind.web.id/", None),
    ("github-prdify", "https://github.com/HakimIqbal?tab=repositories", "prdify"),
    ("github-hub", "https://github.com/HakimIqbal?tab=repositories", "diaspora"),
]


def shoot(page, url, name):
    page.goto(url, wait_until="domcontentloaded", timeout=45000)
    page.wait_for_timeout(6000)
    # dismiss common cookie banners if present
    for sel in ["text=Accept all", "text=Accept", "button:has-text('Got it')"]:
        try:
            el = page.locator(sel).first
            if el.is_visible(timeout=500):
                el.click(timeout=1000)
        except Exception:
            pass
    path = OUT / f"{name}.png"
    page.screenshot(path=str(path), full_page=False)
    print(f"saved {path} ({path.stat().st_size} bytes)")


with sync_playwright() as p:
    browser = p.chromium.launch()
    ctx = browser.new_context(viewport={"width": 1440, "height": 900},
                              device_scale_factor=1,
                              locale="en-US")
    page = ctx.new_page()
    for name, url, repo_hint in TARGETS:
        try:
            if repo_hint:
                # find the repo link matching the hint, then shoot the repo page
                page.goto(url, wait_until="domcontentloaded", timeout=45000)
                page.wait_for_timeout(3000)
                links = page.locator("a[href*='/HakimIqbal/']").all()
                href = None
                for a in links:
                    h = a.get_attribute("href") or ""
                    if repo_hint.lower() in h.lower() and h.count("/") == 2:
                        href = "https://github.com" + h
                        break
                if not href:
                    print(f"no repo matching '{repo_hint}' found; shooting profile list")
                    shoot(page, url, name)
                    continue
                shoot(page, href, name)
            else:
                shoot(page, url, name)
        except Exception as e:
            print(f"FAIL {name}: {e}", file=sys.stderr)
    browser.close()
print("done")
