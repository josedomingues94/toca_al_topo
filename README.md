# Toca al topo

_Proyecto aplicación funciona como una PWA, en la que se crea un usuario para jugar al juego conocido como "Dale al Topo", en la que el usuario, ve en pantalla 9 cuadros, y al puslsar el boton de "START" empieza a mostrarse en uno de los cuadros un topo de forma aleatoria, cada vez que el usuario consigue darle al topo aumenta la puntuación en función del nivel escogido previamente en el desplegabe que contiene los niveles_

## Comenzando 🚀

_Creamos una carpeta en nuestro local para, clonarnos el proyecto desde el repositorio, en el que se encuentra el proyexto_


### Pre-requisitos 📋

_Necesitamos instalar Node previamente, podemos hacerlo desde su web https://nodejs.org/es_

_Desde la carpeta que tenemos en nuestro local donde queremos añadir el proyecto, por consola realizamos el siguiente comando para inicializar el proyecto mediante  OpenWC_

```
npm init @open-wc && npm i
```

_Desde la carpeta que tenemos en nuestro local donde queremos añadir el proyecto, por consola realizamos el siguiente comando para instalar la libreria de lit_

```
npm install lit
```

### Instalación 🔧

_Desde la carpeta del proyecto donde nos encontramos realizamos el siguiente comando para instalar un servidor web para el desarrollo, este comando nos devolver un texto  que tenemos que añadir a nuestro packaje.json donde los scrips 

"scripts": {
  "start": "web-dev-server --node-resolve --open --watch"
},_

```
npm i -D @web/dev-server
```

_Realizamos el siguiente comando para agregar un sistema de enrutamiento mediante el enrutador Vaadin_

```
npm i @vaadin/router
```

_En la terminal dentro de la carpeta del proyecto, realizamos el siguiente comando, con esto se clonaria el proyecto del repositorio en nuestra carpeta local_

```
git clone https://github.com/josedomingues94/toca-al-topo

```

_En la terminal dentro de la carpeta del proyecto, realizamos el siguiente comando para ejecutar nuestro proyecto inicial_

```
npm run start

```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Se usaron estas herramientas para crear el proyecto_

* [Lit Element](https://lit.dev) - El framework web usado
* [Javscript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## Autor ✒️

_Autor del proyecto_

* **Jose Vicente Domingues Gordillo** - *Trabajo Inicial* - [josedomingues94](https://github.com/josedomingues94)