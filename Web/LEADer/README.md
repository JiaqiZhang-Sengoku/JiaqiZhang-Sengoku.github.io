# LEADer Project Webpage

This folder contains the static project webpage for:

**Local Epistemic Uncertainty Guided Active Sampling for Plug-and-play Diffusive Image Restoration**

The webpage is built with plain HTML and CSS, with all visual assets stored locally under `Figures/`.

## Structure

```text
Web/LEADer/
|-- index.html
|-- styles.css
|-- README.md
`-- Figures/
    |-- Input/
    |-- Others/
    |-- Ours/
    |-- Figure3.png
    |-- Figure4.png
    |-- Figure5.png
    |-- Figure6.png
    |-- PaperTable1.svg
    |-- PaperTable2.svg
    |-- PaperTable3.svg
    |-- PaperTable4.svg
    `-- icon SVG files
```

## Usage

The GitHub Pages URL is `/LEADer/`, while the source files stay organized under `Web/LEADer/`.

GitHub Pages/Jekyll publishes this page through the `permalink: /LEADer/` front matter in `index.html`.

## Content Notes

- The hero section includes paper information, author list, affiliation, and project links.
- The restoration demo uses image triplets from `Figures/Input/`, `Figures/Others/`, and `Figures/Ours/`.
- Main paper figures and table SVGs are placed in the corresponding method, comparison, ablation, and memory sections.
- Table SVGs have been cropped for webpage display, while formal captions are written in HTML.

## Links To Update

The following links are placeholders and can be updated before deployment:

- `Code`
- `Poster`

The `Paper` button links to `/Paper/LEADer_Paper.pdf`.

## Deployment

This folder can be deployed as a static site on GitHub Pages or any static hosting service. Keep the relative paths unchanged so that images and icons load correctly.
