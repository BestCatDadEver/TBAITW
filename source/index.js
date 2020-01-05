//Archivo principal del servidor, como va a arrancar el servidor, qué se va a necesitar.
import express from 'express';
import consign from 'consign';

const app = express();
consign({
    //Current working directory
    cwd : __dirname
})
.include('libs/middlewares.js')
.then('libs/boot.js')
.into(app)

