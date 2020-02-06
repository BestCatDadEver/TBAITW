
import express from 'express';

module.exports = app =>{
    //utiliza el puerto por defecto o en caso de que no exista utiliza el 3000
    app.set('port', process.env.PORT || 3000);

    //middlewares
    app.use(express.json())
} 