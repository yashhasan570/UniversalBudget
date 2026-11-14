#!/usr/bin/env python3
"""Re-apply the Universal Budget rebrand after each upstream sync (idempotent).

Protected anchors (kept intact on every run):
- LICENSE.txt (MIT, untouched)
- .github/ and scripts/ are excluded from the sweep entirely
- generic English "actual"/"Actual" words and ActualValue/ActualFieldWidth/
  ActualFields/ActualTap/ActualModal code identifiers are not brand tokens
"""
from pathlib import Path
import shutil

PAIRS = [
 ("ActualBudget", "UniversalBudget"),
 ("actualbudget", "universalbudget"),
 ("actual-budget", "universal-budget"),
 ("@actual-app", "@universal-app"),
 ("ACTUAL_", "UNIVERSALBUDGET_"),
 ("ActualQL", "UniversalBudgetQL"),
 ("eslint-plugin-actual", "eslint-plugin-universalbudget"),
 ("actual-development", "universalbudget-development"),
 ("Actual Budget", "Universal Budget"),
]
SKIP_EXT = {".png",".jpg",".jpeg",".ico",".webp",".woff",".woff2",".ttf",".eot",".otf",".gif",".pdf",".gz",".zip",".mp4"}
KEEP = {"LICENSE.txt", "migrate.py"}
DELETE = ["packages/docs", "AGENTS.md", "CLAUDE.md", "CODEOWNERS",
          "CODE_REVIEW_GUIDELINES.md", "CONTRIBUTING.md", "DESIGN.md", "PRODUCT.md",
          "SECURITY.md", "demo.png", "upcoming-release-notes", ".github/FUNDING.yml",
          ".github/ISSUE_TEMPLATE", ".github/PULL_REQUEST_TEMPLATE"]


def main():
    for d in DELETE:
        p = Path(d)
        if p.is_dir():
            shutil.rmtree(p, ignore_errors=True)
        elif p.exists():
            p.unlink()
    for p in Path(".").rglob("*"):
        if ".git" in p.parts or not p.is_file() or p.name in KEEP or p.suffix in SKIP_EXT:
            continue
        if str(p).startswith((".github/", "scripts/")):
            continue
        try:
            t = p.read_text()
        except Exception:
            continue
        nt = t
        for a, b in PAIRS:
            nt = nt.replace(a, b)
        if nt != t:
            p.write_text(nt)
    readme = Path("README.md")
    if readme.exists() and not readme.read_text().startswith("# Universal Budget"):
        print("README drifted - rewrite needed")
    print("migrate done")


if __name__ == "__main__":
    main()
