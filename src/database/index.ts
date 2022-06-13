import { Sequelize } from "sequelize";

import config from "../config";

class Database {
    static instance: Database;
    private sequalize: Sequelize;

    private constructor() {
        this.sequalize = new Sequelize(config.database.database, config.database.username, config.database.password, {
            host: config.database.host,
            dialect: "mysql"
        });
    }

    public static getInstance(): Database {
        if(!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public getSequalize(): Sequelize {
        return this.sequalize;
    }

    public async init() {
        try {
            await this.sequalize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database', error);
        }
    }
}

export default Database;