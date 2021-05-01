# Poc Estudos Angular - [![Build Status][travis-img]][travis-url]

<br>

## Github Pages

---

[Estudos Angular](https://martins86.github.io/poc-estudos-angular/)

<br>

## GitPod

---

[![Open in Gitpod][open-gitpod-img]][open-gitpod-url]

<br>

## Gerando o Projeto

---

```
ng new poc-estudos-angular --routing=true --strict=true --style=scss
```

<br>

## Instalando os pacotes NPM

---

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
Pacote Dev: npm install bootstrap --save
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
Inicio: firebase init
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

<!-- Markdown link & images -->

[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-estudos-angular
[travis-img]: https://travis-ci.com/martins86/poc-estudos-angular.svg?branch=master
[travis-url]: https://travis-ci.com/martins86/poc-estudos-angular
