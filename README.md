## Despliega tu proyecto en Github Pages con Vite 👇

---
Hago esta pequeña guía para las personas que no sepan el cómo subir su archivo creado con vite+react porque en mi caso estuve buscando un tiempo la información

### Dependencias
Lo primero que debemos tener instalado 

    npm i gh-pages -D


## Vite.config.js
---
Debemos revisar el archivo vite.config.js,modificandolo 

            export default defineConfig({
            plugins: [react()],
            base: "/el-nombre-de-tu-repositorio/",
            });

## Package.json
---
Debemos revisar el archivo Package.json,modificandolo 
Agregamos
        [-"deploy": "gh-pages -d dist"]

            "scripts": {
             "dev": "vite",
            "build": "vite build",
            "preview": "vite preview",
            "deploy": "gh-pages -d dist"
            }



## Git init
---
Ejecutamos los comandos 

            git init
            git add .
            git commit -m "first commit"


## Subir el proyecto a Github
---
            git remote add origin https://github.com/${nombre-cuenta}/${nombre-repositorio}.git
            git branch -M main
            git push -u origin main

## npm run build && npm run deploy
---
Estos comandos se repiten por cada actualización del proyecto:

Ejecutamos los comandos 

            npm run build
            npm run deploy


##Plantilla obtenida de 
---

[https://github.com/adrianhajdin/project_3D_developer_portfolio.git]