# SCGIS DC website

Website for the Washington, DC chapter of the Society for Conservation GIS.

**Live site:** [scgis-dc.github.io/scgis-dc](https://scgis-dc.github.io/scgis-dc/)

## About the site

This is a static website built with HTML and CSS and hosted with GitHub Pages.
It has no build step, package manager, database, or server-side application.

## Repository structure

```text
.
|-- index.html                 # Page content and embedded services
|-- assets/
|   |-- css/
|   |   `-- styles.css        # Layout, colors, typography, and responsive rules
|   `-- images/               # Published logos, photos, and chapter images
|-- .nojekyll                 # Serves the site without Jekyll processing
|-- .gitignore
`-- README.md
```

Keep `index.html` at the repository root so GitHub Pages can serve it directly.

## Preview locally

From the repository directory, start a small local web server:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open [http://127.0.0.1:4173](http://127.0.0.1:4173) in a browser. Stop the
server with `Ctrl+C`.

Opening `index.html` directly may prevent some embedded services from behaving
normally, so a local server is recommended.

## Make common updates

### Page copy and links

Edit `index.html`. Each major area is a `<section>` with a descriptive ID such
as `events`, `chapter-updates`, `community-listserve`, or `chapter-leads`.

### Images

Add published images to `assets/images/` and reference them with a relative path:

```html
<img src="assets/images/example.jpg" alt="A useful image description" />
```

Use lowercase, hyphenated filenames. Resize or optimize very large images before
committing them when practical, and always include meaningful alternative text.

### Events calendar

The Events section contains the Luma calendar `<iframe>`. Update its `src`
attribute in `index.html` if the chapter changes calendars.

### Community survey

The temporary survey area is inside Chapter Updates. When the Google Form is
ready:

1. Open the form in Google Forms.
2. Select **Send**, then **Embed HTML** (`<>`).
3. Copy the generated `<iframe>`.
4. Replace the `survey-placeholder` element in `index.html` with that iframe.
5. Preview the page at desktop and mobile widths before publishing.

### Chapter leads

Each lead is an `<article class="lead-card">` in `index.html`. Store headshots
in `assets/images/`, use the `lead-photo` class, and provide descriptive `alt`
text. Contact links should use `mailto:` or a complete `https://` URL.

### Design and colors

Edit `assets/css/styles.css`. Shared colors and typography are CSS custom
properties in the `:root` block at the top of the file. Reuse those variables
instead of adding one-off color values.

## Publish changes

GitHub Pages publishes from the repository's `main` branch. A typical workflow is:

```powershell
git pull --ff-only
git status
git add index.html assets README.md
git commit -m "Describe the website update"
git push origin main
```

After pushing, allow GitHub Pages a few minutes to deploy and then verify the
live site. Deployment settings are available under **Repository Settings > Pages**.

## Maintenance checklist

Before publishing:

- Preview the complete page locally.
- Check desktop and narrow/mobile layouts.
- Confirm navigation links reach the correct sections.
- Test external links and embedded calendars or forms.
- Confirm every meaningful image has descriptive alternative text.
- Remove obsolete files instead of leaving duplicate images or archives in the root.
- Review `git status` so only intentional files are committed.

## Image credits

- Hero landscape: Unsplash image credited as `lorimcm` in the original filename.
- SCGIS logo and chapter/conference photos are used for SCGIS DC chapter communications.
