# AGENT

This repository contains the documentation for Unmanic and for any development or scripting that the community might want to do around Unmanic.

## Local source references

The `./temp` directory includes cloned projects that can be used as source code references for this documentation:

- `./temp/unmanic` -- The source code for the main Unmanic application. This includes build files for creating the python wheel and Docker image.
- `./temp/unmanic-frontend` -- the source code for the Unmanic frontend that is built into the main Unmanic application.
- `./temp/unmanic-plugins` -- the official repo of unmanic plugins. The source for each plugin is in `./temp/unmanic-plugins/source`.

Use `./clone-projects.sh` to clone these repositories and pull the latest changes into `./temp`.

## Documentation scope

All documentation is stored in Markdown files in `./docs`. This project builds a static site hosted on GitHub Pages.

One particular focus of the documentation is how to create plugins.
