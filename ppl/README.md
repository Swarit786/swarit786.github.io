# Swarit's Workout Routine — installable app

A Progressive Web App. Once hosted over HTTPS it installs to your home screen, opens
fullscreen with no browser bars, and works with no signal.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The whole app. No build step, no dependencies. |
| `manifest.webmanifest` | Name, icons, colours, fullscreen mode. |
| `sw.js` | Service worker — caches the app so it opens offline. |
| `icon-*.png` | Home screen icons. |

## Deploy on GitHub Pages

You already have `swarit786.github.io`. Either put this in a subfolder of that repo, or
make a new repo — a subfolder is simpler.

```bash
# from a clone of swarit786.github.io
mkdir ppl
cp /path/to/these/files/* ppl/
git add ppl
git commit -m "Add PPL training log app"
git push
```

It goes live at `https://swarit786.github.io/ppl/` (or `https://swarittiwari.com/ppl/`
if the custom domain covers the whole site). Give it a minute or two to publish.

## Install it on your phone

**Android / Chrome** — open the URL, then menu (⋮) → *Install app* or *Add to Home screen*.
Chrome may also show an install prompt at the bottom by itself.

**iPhone / Safari** — open the URL, tap Share, then *Add to Home Screen*. On iOS this
must be done in Safari; Chrome on iOS cannot install PWAs.

After installing, open it from the home screen icon rather than the browser. It will
launch fullscreen and keep the screen awake while you train.


## If the app shows the Chrome icon instead of the logo

Android caches the icon at install time, so a bad first install sticks. Fix in this order:

1. **Long-press the app icon → Uninstall** (this removes only the shortcut, not your log).
2. In Chrome: **⋮ → Settings → Site settings → All sites →** find your Pages site **→ Clear & reset**.
3. Confirm every icon actually loads. Open each of these directly in the browser:
   `.../ppl/manifest.webmanifest`, `.../ppl/icon-192.png`, `.../ppl/icon-512.png`,
   `.../ppl/icon-512-maskable.png`. Any 404 here is the cause — the file did not upload.
4. Reload the app URL, then **⋮ → Install app** again.

The usual culprit is that the PNGs were never pushed, or they sit in the repo root
instead of next to `index.html`. All files must live in the same folder.

## Where your data lives

In the browser's local storage on that device. It is not uploaded anywhere and there is
no account. Two consequences worth knowing:

- Clearing site data or deleting the app wipes the log.
- The log does not sync between your phone and your laptop.

So use **Log → Copy all data** every few weeks and paste the JSON into a note or a file
in this repo. That is your backup.

## Updating the app later

Edit `index.html`, then bump the cache name in `sw.js` (`swarit-workout-v4` → `swarit-workout-v5`) so
installed copies pick up the new version instead of serving the cached old one. Push,
then close and reopen the app twice.

## Running it locally first

```bash
cd ppl
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Service workers and install prompts need HTTPS or
localhost — opening `index.html` as a `file://` path will not register the worker.
