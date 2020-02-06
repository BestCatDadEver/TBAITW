

module.exports = (sequelize,Sequelize) => {

    const Users = sequelize.define('Users', {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre : {
            type : Sequelize.STRING,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        }
       /* cedula : {
            type : Sequelize.INTEGER,
            allowNull : false,
            unique : true,
            validate : {
                notEmpty : true
            }
        },
        correo : {
            type : Sequelize.STRING,
            allowNull : false,
            unique : true,
            validate : {
                notEmpty : true
            }
        },
        telefono : {
            type : Sequelize.INTEGER,
            allowNull : false,
            validate : {
                notEmpty : true
            }
        },
        url : {
            type : Sequelize.STRING
        }*/
    });

    
    return Users;    
}
    
    
    
