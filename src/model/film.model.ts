import { DataTypes } from "sequelize";

import Database from '../database';

const database = Database.getInstance();

const Film = database.getSequalize().define('Film', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [0, 300] }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [0, 80] }
    },
    date_of_creation: {
        type: DataTypes.DATE,
        allowNull: false
    },
    qualification: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false
    }
});

export default Film;