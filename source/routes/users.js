module.exports = (sequelize, DataTypes) => {

    
    const Users = sequelize.define({
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        cedula : {
            type : DataTypes.INTEGER,
            allowNull : false,
            unique : true,
            validate : {
                notEmpty : true
            }
        },
        correo : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true,
            validate : {
                notEmpty : true
            }
        },
        telefono : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        url : {
            type : DataTypes.STRING
        }
    });

    return Users;
};