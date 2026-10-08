# Margaret W. Conkey — Archaeology Website

A static website (plain HTML, CSS, and a little JavaScript) for Prof. Margaret (Meg) Conkey. It needs no build step and no server code: open `index.html` in a browser to preview.

## Pages

| File | Content |
|---|---|
| `index.html` | Home: panorama banner, intro, field projects, research, media |
| `about.html` | General background + CV download (`#cv`) |
| `between-the-caves.html` | Between the Caves survey (1993–) |
| `peyre-blanque.html` | Peyre Blanque excavations |
| `research.html` | Gender/feminist archaeology, Paleolithic art, Ethics Bowl |
| `publications.html` | Recent (`#recent`) and "classic" (`#classic`) publications |
| `media.html` | Interviews, biographies, videos |

The header, menus, and footer are repeated in every page. If you change the menu, change it in all seven files.

## Swapping in real content

- **Draft text:** Placeholder text is marked with `<!-- EDIT -->` comments and yellow "Draft text" notes. Delete each note once Meg's text is in.
- **Pyrenees panorama:** Save the photo as `assets/img/pyrenees-photo.jpg` (wide, about 2400px across), then change the `url(...)` in `.panorama` in `assets/css/style.css`. `assets/img/pyrenees-panorama.svg` is an illustrated stand-in.
- **Between the Caves logo:** Replace `assets/img/btc-mark.svg` with the real FileMaker logo, keeping the same file name or updating the references. It "marks" BtC links across the site.
- **Portrait and field photos:** Replace the `.portrait` and `.ph` placeholder boxes with `<img src="assets/img/..." alt="...">`.
- **CV:** Put the PDF at `assets/docs/conkey-cv.pdf`.

## Hosting options

1. **GitHub Pages (free):** Push to GitHub, open Settings → Pages, and choose "Deploy from branch: main / root". The site will be at `https://<user>.github.io/<repo>/`, and a custom domain can be added later.
2. **Netlify / Cloudflare Pages (free):** Connect the repo. They also support custom domains.
3. **UC Berkeley hosting:** Ask the Anthropology department or campus web services about hosting under berkeley.edu.

A custom domain (for example `margaretconkey.com`) costs about $10–15 a year from any registrar.
