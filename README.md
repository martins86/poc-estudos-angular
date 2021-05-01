# Poc Estudos Angular - [![Build Status][travis-img]][travis-url]

<br>

![GitHub package.json version][version-img]
![GitHub top language][language-img]
[![code style: prettier][prettier-style-img]][prettier-style-url]
[![GitHub license][license-img]][license-url]
![GitHub last commit][commit-img]

<br>

## Github Pages

<br>

> Aplicação em Angular para estudos, CI/CD Travis com Deploy gh-pages<br>
> GitHub Pages - [Aplicação](https://martins86.github.io/poc-estudos-angular/)

<br>

## GitPod

[![Open in Gitpod][open-gitpod-img]][open-gitpod-url]

<br>

## Gerando o Projeto

```
ng new poc-estudos-angular --routing=true --strict=true --style=scss
```

<br>

## Instalando os pacotes NPM

<br>

Instalando todos os pacotes de package.json :<br>

```
npm install
```

<br>
<br>

ESLint builder - [ESLint builder](https://github.com/angular-eslint/angular-eslint#migrating-an-angular-cli-project-from-codelyzer-and-tslint) :

---

```
Pacote: ng add @angular-eslint/schematics
Converter: ng g @angular-eslint/schematics:convert-tslint-to-eslint
Checa/Valida: npx ng lint
```

<br>
<br>

Prettier - Code Quality - [Prettier](https://prettier.io/) :

---

```
Pacote Dev: npm install prettier --save-dev --save-exact
Otimiza: npx prettier --write --ignore-unknown .
Checa/Valida: npx prettier --check .
```

<br>
<br>

Lint Staged - CI - [lint-staged](https://github.com/okonet/lint-staged#readme) :

---

```
Pacote Dev: npm install lint-staged --save-dev
```

<br>
<br>

Husky - CI - [Husky](https://typicode.github.io/husky/#/) :

---

```
Pacote Dev: npm install husky --save-dev
Git Hooks: husky install
Pre Commit: husky add .husky/pre-commit "npm run pre-commit"
```

<br>
<br>

Angular Material / CDK - [Angular Material](https://material.angular.io/) :

---

```
Pacote Dev: npm install @angular/material @angular/cdk --save
```

<br>
<br>

Bootstrap - [Bootstrap](https://getbootstrap.com/) :

---

```
Pacote Dev: npm install bootstrap@next --save
```

<br>
<br>

Firebase - [Firebase](https://firebase.google.com/) :

---

```
Pacote: npm install firebase --save
Pacote Global: npm install -global firebase-tools
Angular Fire: ng add @angular/fire@next
Login: firebase login
```

<br>
<br>

# Criando estrutura

### Core :

```
ng g guard core/guard/auth-guard

ng g interceptor core/interceptor/http-request
```

<br>
<br>

### Pages :

```
ng g m pages/home-page --module app --routing
ng g c pages/home-page

ng g m pages/not-found-page --module app --routing
ng g c pages/not-found-page
```

<br>
<br>

### Shared :

```
ng g m shared/layout/top-bar
ng g c shared/layout/top-bar

ng g m shared/layout/left-bar
ng g c shared/layout/left-bar

ng g m shared/layout/bottom-bar
ng g c shared/layout/bottom-bar

ng g class shared/models/user-session --type=model --skip-tests=true

ng g s shared/services/registry-icons/registry-icons

ng g m shared/pipes
ng g p shared/pipes/bypass-security/bypass-security
```

<br>
<br>

# Outros comandos personalizados

<br>

| Alias                  | Descrição                                       | Comando                                                                             |
| ---------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| npm run test           | Rodando testes unitários no CI/CD.              | ng test --no-watch --no-progress --code-coverage --browsers ChromeHeadlessNoSandbox |
| npm run test-dev       | Rodando testes unitários em desenvolvimento.    | ng test --code-coverage --progress --browsers Chrome                                |
| npm run lint           | Rodando ts lint (análise de código).            | ng lint                                                                             |
| npm run e2e            | Rodando testes end-to-end (e2e).                | ng e2e --port 4201                                                                  |
| npm run prettier-write | Checa, Organiza e Otimiza (formatado) o código. | npx prettier --write --ignore-unknown .                                             |
| npm run prettier-check | Checa se o código esta formatado.               | npx prettier --check .                                                              |
| npm run pre-commit     | Rodando ts lint, testes unitários e testes e2e. | npm run lint && npm run test && npm run e2e                                         |

<br>
<br>

# Versões

<br>

![npm][npm-img] ![node-current][node-current-img]

<br>

## Dependências em desenvolvimento

<br>

| Package        | NPMJS                                        | Shields                                                                           |
| -------------- | -------------------------------------------- | --------------------------------------------------------------------------------- |
| Jasmine        | https://www.npmjs.com/package/jasmine-core   | ![GitHub package.json dependency version (dev dep on branch)][jasmine-core-img]   |
| Karma          | https://www.npmjs.com/package/karmal         | ![GitHub package.json dependency version (dev dep on branch)][karma-img]          |
| Protractor     | https://www.npmjs.com/package/protractor     | ![GitHub package.json dependency version (dev dep on branch)][protractor-img]     |
| Husky          | https://www.npmjs.com/package/husky          | ![GitHub package.json dependency version (dev dep on branch)][husky-img]          |
| Lint Staged    | https://www.npmjs.com/package/lint-staged    | ![GitHub package.json dependency version (dev dep on branch)][lint-staged-img]    |
| Prettier       | https://www.npmjs.com/package/prettier       | ![GitHub package.json dependency version (dev dep on branch)][prettier-img]       |
| Firebase Tools | https://www.npmjs.com/package/firebase-tools | ![GitHub package.json dependency version (dev dep on branch)][firebase-tools-img] |

<!-- Markdown link & images -->

[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-estudos-angular
[travis-img]: https://travis-ci.com/martins86/poc-estudos-angular.svg?branch=master
[travis-url]: https://travis-ci.com/martins86/poc-estudos-angular
[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-estudos-angular
[version-img]: https://img.shields.io/github/package-json/v/martins86/poc-estudos-angular
[language-img]: https://img.shields.io/github/languages/top/martins86/poc-estudos-angular
[prettier-style-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-style-url]: https://github.com/prettier/prettier
[license-img]: https://img.shields.io/github/license/martins86/poc-estudos-angular
[license-url]: https://github.com/martins86/poc-estudos-angular/blob/main/LICENSE
[travis-img]: https://travis-ci.com/martins86/poc-estudos-angular.svg?branch=master
[travis-url]: https://travis-ci.com/martins86/poc-estudos-angular
[commit-img]: https://img.shields.io/github/last-commit/martins86/poc-estudos-angular
[npm-img]: https://img.shields.io/npm/v/npm
[node-current-img]: https://img.shields.io/node/v/latest-version
[jasmine-core-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular/dev/jasmine-core
[karma-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular/dev/karma
[protractor-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular/dev/protractor
[husky-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular/dev/husky
[lint-staged-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular/dev/lint-staged
[prettier-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular/dev/prettier
[firebase-tools-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-estudos-angular/dev/firebase-tools
