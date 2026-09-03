# SPITz-X Frontend 3.0

## GitHub Pages
Keep the existing repository structure.

The important frontend files are:
- `index.html`
- `spitz-app.html`
- `js/cloak.js`
- `js/snow.js`
- `css/portal.css`
- `css/spitz-dark.css`
- `Games/...`

`spitz-app.html` is the updated media UI. It no longer uses a YouTube iframe for the main player. It uses a native HTML5 `<video>` element when an authorized MP4 copy exists in the SPITz-X API library.

Default API:
`https://spitz-x-api.onrender.com`

## Student flow
1. Paste a YouTube watch link.
2. Click Analyze.
3. If the matching authorized MP4 exists, click Watch in SPITz-X or Download MP4.

## Important
A YouTube watch URL is not itself an MP4 file. The native player therefore needs the authorized MP4 copy registered in the SPITz-X API.
