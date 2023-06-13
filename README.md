# Projeto Apoena

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Publicando no github pages

## 1. Instalar o gh-pages
```shell
$ npm install gh-pages
```

## 2. Incluir uma propriedade **homepage** no arquivo *package.json* 

A homepage deve seguir o padrão: `https://{nome_usuário}.github.io/{nome_repositório}`

```diff
{
  "name": "my-app",
  "version": "0.1.0",
+ "homepage": "https://gitname.github.io/react-gh-pages",
  "private": true,
```

## 3. Incluir os scripts de deploy no arquivo *package.json*
```diff
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

## 4. Rodar o deploy

```shell
$ npm run deploy
```
## 5. Configurar o github pages

1. Ir até a opção **GitHub Pages** na página *settings*
   1. Na barra lateral, em "Code and automation" clique em "Pages"
1. Configure o "Build and deployment": 
   1. **Source**: Deploy from a branch
   2. **Branch**: 
      - Branch: `gh-pages`
      - Folder: `/ (root)`
1. Clique no botão "Save"
