# Jiaqi Zhang Academic Homepage

Personal academic homepage for Jiaqi Zhang, deployed with GitHub Pages and Jekyll.

## Structure

```text
.
|-- _config.yml          # Site configuration and profile metadata
|-- _data/               # Navigation data
|-- _includes/           # Shared Jekyll includes
|-- _layouts/            # Page layouts
|-- _pages/              # Main homepage content sections
|-- _sass/               # Theme and page styles
|-- assets/              # Shared JavaScript and theme assets
|-- Images/              # Optimized WebP images, icons, awards, logos, CV, and publication figures
|-- Paper/               # Paper PDFs and supplementary files
`-- Web/LEADer/          # LEADer project webpage source
```

The LEADer project source is kept under `Web/LEADer/`, while Jekyll publishes it at `/LEADer/`.

## Local Preview

Install the GitHub Pages/Jekyll dependencies, then run:

```bash
bash run_server.sh
```

The local site will be available at `http://127.0.0.1:4000`.

## Web Image Optimization

All visual assets on the homepage and project websites are served directly as optimized
WebP files. Use Node.js 20.9 or newer. After adding a PNG, JPG, JPEG, visual PDF, or paper
table SVG under `Images/` or `Web/`, run:

```bash
npm install
npm run images
```

The command creates a same-directory WebP, rewrites site references, validates the output,
and removes the source image only after conversion succeeds. For visual PDFs, the first page
is rendered as the WebP preview. Downloadable documents in `Paper/` and `Images/CV.pdf` are
preserved. Validate the repository with:

```bash
npm run images:check
```
