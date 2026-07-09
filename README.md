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
|-- Images/              # Homepage images, icons, awards, logos, CV, and publication thumbnails
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
