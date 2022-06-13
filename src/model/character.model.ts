import { DataTypes } from "sequelize";
import Database from '../database';

const database = Database.getInstance();

const Character = database.getSequalize().define('Character', {
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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [0, 50] }
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    history: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { len: [0, 200] }
    }
});

export default Character;