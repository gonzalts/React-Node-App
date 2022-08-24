import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Contact = db.define('contact',{
    name:{
        type: DataTypes.STRING
    },
    lastname:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    subject:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Contact;