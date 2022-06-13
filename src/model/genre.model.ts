import { DataTypes } from "sequelize";
import Database from "../database";

const database = Database.getInstance();

const Genre = database.getSequalize().define('Genre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [0, 50] }
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { len: [0, 300] }
    }
});

export default Genre;