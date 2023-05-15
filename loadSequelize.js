//importamos el config que tiene la informacion que necesitamos
import config from './Config/config.js'


//importamos el objeto sequelize para poder crear solicitud sequelize que se conecte a una base de datos y nos permita trabajar con sus datos
import {DataTypes, Sequelize } from 'sequelize'


//creamos una constante que incluira una solicitud sequelize
export const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
);

export const dataType = DataTypes;