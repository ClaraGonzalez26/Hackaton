import { dataType, sequelize } from "../loadSequelize.js";

export const Archivos = sequelize.define('Archivos', {
        archivo: dataType.STRING,
   
} , {tableName: 'Archivos', timestamps: false})