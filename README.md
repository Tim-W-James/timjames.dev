## React TS Template

Opinionated template for frontend React TypeScript projects with Vite, ESLint,
Prettier, Vitetest, and various Node packages. This template aims to speed up
the initial configuration and boilerplate for new projects, while providing
integration with a range of modern tooling. This repo also includes a React
starter app using Bootstrap Components and React Router 6.

### Template includes:

- [React 18](https://reactjs.org/docs/getting-started.html): frontend framework
- [Vite](https://vitejs.dev/config/): frontend build tool and dev server, configured in `./vite.config.ts`
- [TypeScript 4.7](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html): types for js. Configured in `./tsconfig.json`
- [SASS](https://sass-lang.com/): CSS preprocessor
- [ESLint](https://eslint.org/docs/2.0.0/user-guide/configuring): Linter/code
  analyzer for TypeScript. Configured in `./.eslintrc.cjs` with
  rules from AirBnB and SonarJS.
- [Stylelint](https://stylelint.io/): Linter/code analyzer for SCSS. Configured in `./.stylelintrc.cjs`
- [Prettier](https://prettier.io/docs/en/configuration.html): Formatter. Configured in `./.prettierrc.cjs`
- [Vitest](https://vitest.dev/config/): testing framework, configured in `./vite.config.ts` > test
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#configuration): global imports. Configured in `./vite.config.ts` > Plugins > AutoImport
- npm scripts (run with `npm run <script>`):
  - `dev` - starts a dev environment on localhost that will reload as files change
  - `dev:https` - starts a dev environment on localhost over https (requires a
    cert to be generated)
  - `build` - compile prod source code to `./dist`
  - `preview` - after build, preview on localhost
  - `lint` - evaluate ESLint rules against source code
  - `format` - format source code with prettier and try to fix any ESLint errors
  - `test:run` - run tests
  - `test:ui` - run tests and display on localhost
  - `test` - run unit tests located in `./tests` that will reload whenever files change
  - `coverage` - run coverage tests and output results to `./coverage`
- [Husky](https://github.com/typicode/husky): pre-commit Git hooks to lint, format and run tests. Configured in `./.husky`
- [GitHub Actions](https://docs.github.com/en/actions): CI/CD pipeline. Configured in `./.github/workflows`
- Starter React app with [Bootstrap 5](https://react-bootstrap.github.io/getting-started/introduction/) and [React Router 6](https://reactrouter.com/docs/en/v6/getting-started/overview)
- <a href="#project-structure">Project Structure</a>

Complete the configuration checklist below and remove from the README once complete.

## TODO

- [ ] If using VSCode, install recommended extensions with the command pallet: `Extensions:Show Recommended Extensions`. Otherwise, use install an[`EditorConfig`](https://editorconfig.org/#download) plugin for your text editor or IDE of choice
- [ ] Specify the following fields with a search and replace:
      repo_name, project_title, project_description, project_keywords
- [ ] Replace personal information with your own:
      Tim-W-James, Tim James, tim.jameswork9800@gmail.com, https://linkedin.com/in/timothy-william-james/
- [ ] Specify the LICENSE.txt for the project
- [ ] `README.md` - there is a README template [below](#top) based on the [Best-README-Template](https://github.com/othneildrew/Best-README-Template). Find a list of resources to help you write READMEs in a comment at the end of this file. Fill out the following:
  - [ ] Fill out each section of the README as needed, uncommenting/removing sections as needed.
  - [ ] Add images for the following:
      images/logo.png, images/screenshot.png
  <!-- ! Use ESM where possible
       ! If you need to use CJS, see: https://www.typescriptlang.org/docs/handbook/esm-node.html
- [ ] Set the environment of the project:
  - ES Modules (import, export):
    - Add to `package.json`: `"type": "module"`
    - Add to `tsconfig.json`:
      - `"module": "ES6"`
      - `"moduleResolution" : "node`
      - `"lib": ["ES6", "DOM"]`
    - Add to `.eslintrc.cjs`: `"parserOptions": { "sourceType": "module" }`
  - Node CommonJS (require, exports):
    - Add to `package.json`: `"type": "commonjs"`
    - Add to `tsconfig.json`: `"module": "commonjs"`
    - Add to `.eslintrc.cjs`: `"parserOptions": { "sourceType": "script" }` -->
- [ ] Set the target ES version (ES6 - supported by most browsers, ESNext - latest):
  - `./.eslint.cjs`:
    - `"<target>": true`
    - `"ecmaVersion": <target>`
  - `./tsconfig.json`:
    - `"target": "<target>"`
    - `"module": "<target>"`
    - `"lib": ["<target>", "DOM"]`
  - Append `--target <target>` to the `package.json` build script
- [ ] Add any [global imports](https://github.com/antfu/unplugin-auto-import#configuration) to `vite.config.ts` > Plugins > AutoImport
- [ ] Do you want to commit package-lock? If not, add it to the `./.gitignore` and change the GitHub Action step "install dependencies" from `npm ci` to `npm i`. Also consider using [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
- [ ] Specify node version in the `.nvmrc`
- [ ] Specify formatting and editor configuration in `./.editorconfig`. Use the `./.prettierrc.cjs` for js specific rules that are not defined in `./.editorconfig`.
- [ ] Run: `npm i` (or `yarn` if using [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable))
- [ ] Setup Git hooks (Husky): `npm run prepare`
- [ ] Add continuous deployment workflow to `./.github/workflows`
- [ ] Finally, remove/modify the sample code:
  - `./src/*`
  - `./tests/*`
  - `./public/assets/*`
  - `./index.html`
  - And any dependencies you don't need such as `react-router-dom`,
    `react-bootstrap` or `react-icons`

↑ Remove everything above once setup is complete. ↑

<!-- ! If you can read this comment, please preview this file with a markdown renderer -->

<!--
*** README forked from the Best-README-Template: https://github.com/othneildrew/Best-README-Template
*** Forked by Tim James: https://github.com/Tim-W-James/README-Template
***
*** See the TODO lists for project setup.
*** Find a list of resources for writing markdown, etc. at the end of this file.
-->

<!-- PROJECT SHIELDS -->
<!-- [![CI][ci-shield]][ci-url] -->
<!-- [![Release][release-shield]][release-url] -->
<!-- [![Last Commit][last-commit-shield]][last-commit-url] -->
<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->
<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![MIT License][license-shield]][license-url] -->
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Tim-W-James/repo_name">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

  <h2 align="center" id="top">project_title</h2>

  <p align="center">
    project_description
    <br />
<!--     <a href="https://github.com/Tim-W-James/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br /> -->
<!--     <a href="https://github.com/Tim-W-James/repo_name">View Demo</a> -->
<!--     ·
    <a href="https://github.com/Tim-W-James/repo_name/issues">Report Bug</a> -->
<!--     ·
    <a href="https://github.com/Tim-W-James/repo_name/issues">Request Feature</a> -->
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#goals">Goals</a></li>
        <!-- <li><a href="#roadmap">Goals</a></li> -->
        <!-- <li><a href="#features">Features</a></li> -->
        <!-- <li><a href="#built-with">Built With</a></li> -->
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
        <a href="#usage">Usage</a>
        <ul>
          <!-- <li><a href="#example-usecases">Example Usecases</a></li> -->
        </ul>
    </li>
    <li>
        <a href="#development">Development</a>
        <ul>
          <li><a href="#project-structure">Project Structure</a></li>
          <li><a href="#testing">Testing</a></li>
          <li><a href="#code-style">Code Style</a></li>
        </ul>
    </li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <!-- <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![repo_name Screen Shot][product-screenshot]](https://example.com) -->

About text.

### Goals

- Stuff to do

<!-- ### Roadmap

See the [open issues](https://github.com/Tim-W-James/repo_name/issues) for a list of proposed features (and known issues). -->

<!-- ### Features

* -->

<!-- ### Built With

* []() -->

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Install [`node`](https://nodejs.org/en/) for the version in `.nvmrc` or use [`nvm`](https://github.com/nvm-sh/nvm):

  ```sh
  nvm install && nvm use
  ```

### Installation

1. Clone the repo

```sh
git clone https://github.com/Tim-W-James/repo_name.git
```

2. Install dependencies

```sh
npm i
```

<!-- USAGE -->

## Usage

- Build to `./dist` and preview:

  ```sh
  npm run build
  npm run preview
  ```

<!-- ### Example Usecases

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- DEVELOPMENT -->

## Development

- Start a development environment:

  ```sh
  npm run dev
  ```

### Project Structure

- Source code: `./src`
- Tests: `./tests`
- Types: `./types`
- SCSS: `./src/scss`
- Web accessible files: `./public`
- Site assets (images, etc.): `./public/assets`
- README images: `./images`

### Testing

- Run unit tests located in `./tests` that will reload whenever files change:

  ```sh
  npm run test
  ```

- Run coverage tests and output results to `./coverage`:

  ```sh
  npm run coverage
  ```

### Code Style

- Evaluate ESLint (`./.eslintrc.cjs`) and StyleLint (`./.stylelintrc.cjs`) rules against source code:

  ```sh
  npm run lint
  ```

- Format source code with prettier (`./.prettierrc.cjs`) and try to fix any
  ESLint (`./.eslintrc.cjs`) or StyleLint (`./.stylelintrc.cjs`) errors:

  ```sh
  npm run format
  ```

<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<!-- LICENSE -->
<!-- ## License

Distributed under the MIT License. See `LICENSE` for more information. -->

<!-- CONTACT -->
<!-- ## Contact

Email: [tim.jameswork9800@gmail.com](mailto:tim.jameswork9800@gmail.com "tim.jameswork9800@gmail.com")

Project Link: [https://github.com/Tim-W-James/repo_name](https://github.com/Tim-W-James/repo_name) -->

<!-- ACKNOWLEDGEMENTS -->
<!-- ## Acknowledgements

* []()
* []()
* []() -->

<a href="#top">↑ Back to Top ↑</a>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- Shields: https://shields.io -->
<!-- Icons: https://github.com/simple-icons/simple-icons/blob/develop/slugs.md -->

[ci-shield]: https://img.shields.io/github/workflow/status/Tim-W-James/repo_name/CI?style=for-the-badge&logo=githubactions&logoColor=white
[ci-url]: https://github.com/Tim-W-James/repo_name/actions
[release-shield]: https://img.shields.io/github/v/release/Tim-W-James/repo_name.svg?include_prereleases&style=for-the-badge
[release-url]: https://github.com/Tim-W-James/repo_name/releases
[last-commit-shield]: https://img.shields.io/github/last-commit/Tim-W-James/repo_name.svg?style=for-the-badge&logo=git&logoColor=white
[last-commit-url]: https://github.com/Tim-W-James/repo_name/commits/main
[contributors-shield]: https://img.shields.io/github/contributors/Tim-W-James/repo_name.svg?style=for-the-badge&logo=github&logoColor=white
[contributors-url]: https://github.com/Tim-W-James/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Tim-W-James/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/Tim-W-James/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/Tim-W-James/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/Tim-W-James/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/Tim-W-James/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/Tim-W-James/repo_name/issues
[license-shield]: https://img.shields.io/github/license/Tim-W-James/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/Tim-W-James/repo_name/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/timothy-william-james/
[product-screenshot]: images/screenshot.png

<!-- USEFUL LINKS FOR MARKDOWN
* https://github.com/Tim-W-James/blog/blob/master/Markdow-Cheatsheet.md
* https://www.markdownguide.org/basic-syntax
* https://www.webpagefx.com/tools/emoji-cheat-sheet
* https://shields.io
* https://github.com/simple-icons/simple-icons/blob/develop/slugs.md
* https://choosealicense.com
* https://pages.github.com
* https://daneden.github.io/animate.css
* https://connoratherton.com/loaders
* https://kenwheeler.github.io/slick
* https://github.com/cferdinandi/smooth-scroll
* http://leafo.net/sticky-kit
* http://jvectormap.com
* https://fontawesome.com -->
