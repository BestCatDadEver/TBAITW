

module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
        id : {
            type : sequelize.INTEGER,
            DataType : sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : sequelize.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        cedula : {
            type : sequelize.INTEGER,
            allowNull : false,
            unique : true,
            validate : {
                notEmpty : true
            }
        },
        correo : {
            type : sequelize.STRING,
            allowNull : false,
            unique : true,
            validate : {
                notEmpty : true
            }
        },
        telefono : {
            type : sequelize.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        url : {
            type : sequelize.STRING
        }
    });
    console.log(Users.id)
    return Users;
    
};