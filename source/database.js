import Sequelize from 'sequelize';

//Se necesita inicializarlo.

let db = null;
module.exports = app => {
    
    const config = app.libs.configs;
    console.log(config);
    if(!db){
        new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
    }
    return db;
}
