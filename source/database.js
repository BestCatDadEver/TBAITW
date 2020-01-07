import Sequelize from 'sequelize';

//Se necesita inicializarlo.

let db = null;
module.exports = app => {
    
    const config = app.libs.configs;
    
    if(!db){
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        db = {
            sequelize,
            Sequelize,
            model : {}
        }
    }
    return db;
}
