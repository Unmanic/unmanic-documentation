# AGENT

This repository contains the documentation for Unmanic and for any development or scripting that the community might want to do around Unmanic.

## Local source references

The `./temp` directory includes cloned projects that can be used as source code references for this documentation:

- `./temp/unmanic` -- The source code for the main Unmanic application. This includes build files for creating the python wheel and Docker image.
- `./temp/unmanic-frontend` -- the source code for the Unmanic frontend that is built into the main Unmanic application.
- `./temp/unmanic-plugins` -- the official repo of unmanic plugins. The source for each plugin is in `./temp/unmanic-plugins/source`.

Use `./devops/clone-refrence-projects.sh` to clone these repositories and pull the latest changes into `./temp`.

## Documentation scope

All documentation is stored in Markdown files in `./docs`. This project builds a static site hosted on GitHub Pages.

One particular focus of the documentation is how to create plugins.

## Documentation formatting

- Do not hard-wrap prose in Markdown; keep sentences as single lines to simplify diffs and edits.

## Community guides

- Community guides belong in `./docs/guides`.
- Each guide should include the three shields.io header chips for Difficulty, Setup Time, and Original Author.

## Frontend conventions (home page)

- Home page-specific components live under `src/components/home` and are imported by `src/pages/index.js`.
- Shared components are organized into feature subfolders under `src/components` (for example `installations` and `diagrams`).
- Home page sections are wrapped with `HomeSection`, which exposes data attributes to drive a fixed background transition system.
- The fixed background is defined in `src/pages/styles.module.css`, while scroll-driven background changes are handled in `src/components/home/useHomePageScroll.js`.
- Section backgrounds are set via `HomeSection` props (`backgroundColor`, `backgroundImage`, `backgroundBlur`) rather than per-section CSS backgrounds.
- Static assets for home visuals live under `static/img/home` (for example `static/img/home/file-size-metrics-data-panel.png`).
