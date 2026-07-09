# LEADer Project Webpage

This folder contains the static project webpage for:

**Local Epistemic Uncertainty Guided Active Sampling for Plug-and-play Diffusive Image Restoration**

The webpage is built with plain HTML and CSS, with all visual assets stored locally under `figures/`.

## Structure

```text
LEADer/
|-- index.html
|-- styles.css
|-- README.md
`-- figures/
    |-- input/
    |-- others/
    |-- ours/
    |-- Figure3.png
    |-- Figure4.png
    |-- Figure5.png
    |-- Figure6.png
    |-- paper_table_1_Table1.svg
    |-- paper_table_2_Table2.svg
    |-- paper_table_3_Table3.svg
    |-- paper_table_4_Table4.svg
    `-- icon SVG files
```

## Usage

Open `index.html` directly in a browser to view the webpage.

No build step or local server is required.

## Content Notes

- The hero section includes paper information, author list, affiliation, and project links.
- The restoration demo uses image triplets from `figures/input/`, `figures/others/`, and `figures/ours/`.
- Main paper figures and table SVGs are placed in the corresponding method, comparison, ablation, and memory sections.
- Table SVGs have been cropped for webpage display, while formal captions are written in HTML.

## Links To Update

The following links are placeholders and can be updated before deployment:

- `Code`
- `Poster`

The `Paper` button links to `/Paper/LEADer_Paper.pdf`.

## Deployment

This folder can be deployed as a static site on GitHub Pages or any static hosting service. Keep the relative paths unchanged so that images and icons load correctly.
