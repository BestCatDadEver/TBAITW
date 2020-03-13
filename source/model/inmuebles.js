module.exports = (sequelize, Sequelize) =>{
    const Inmuebles = sequelize.define('Inmuebles',{
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        tipo : {
            type : Sequelize.STRING,
            allowNull : true,
            validate : {
                notEmpty : true
            }
        },
        price : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        bedroom : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        bathroom : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        parking : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        zone : {
            type : Sequelize.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
    });

    return Inmuebles;
}