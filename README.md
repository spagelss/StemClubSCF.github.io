STEM Club at SCF — Canvas page
A single self-contained page (`index.html`) meant to be hosted on GitHub
Pages, then embedded into a Canvas course via an iframe.
1. Put it on GitHub
This repository is already ready for Pages. Push the `main` branch, then
enable Pages as described below. The published URL will be:
`https://spagelss.github.io/StemClubSCF.github.io/`
2. Turn on GitHub Pages
In the repo, go to Settings → Pages.
Under "Build and deployment," set Source to `Deploy from a branch`.
Set Branch to `main` (or whatever your default branch is) and
folder to `/ (root)`. Save.
Wait ~1 minute, then refresh — GitHub shows your live URL at the top
of that same Pages settings screen. It looks like:
`https://your-username.github.io/your-repo-name/`
3. Embed it in Canvas
In the Canvas page/module item, open the Rich Content Editor's HTML
editor (`</>` icon) and paste:
```html
<iframe
  src="https://spagelss.github.io/StemClubSCF.github.io/"
  title="STEM Club at SCF"
  style="width:100%; height:1500px; border:0; display:block;"
  loading="lazy"
></iframe>
```
Canvas may remove unsupported attributes or styles when saving. If it does,
keep at least `src`, `title`, `width="100%"`, `height="1500"`, and
`frameborder="0"`. The iframe does not auto-resize to its content, so raise
the height if the footer is cut off; `1500px` is a good starting point for
this page.
4. Making updates
Edit `index.html` (either right in the GitHub web UI's editor, or locally
and push). GitHub Pages usually redeploys within a minute — no changes
needed on the Canvas side, since the iframe just points at the live URL.
Things you'll likely update each term:
Meeting info — the three boxes under the header (`MEETING INFO`
comment in the file).
Upcoming events — the `EVENTS` section.
Announcements — the `ANNOUNCEMENTS` section. This is a manual list
(not pulled live from Canvas), so copy over anything you post as a
Canvas announcement if you want it to show here too.
Colors — all defined once near the top of the `<style>` block as
CSS variables (`--sc-navy`, `--sc-green`, etc).
