import Character from "./character.model";
import Film from "./film.model";
import Genre from "./genre.model";

import Database from '../database';

const database = Database.getInstance();

async function initModel() {

    Film.belongsToMany(Character, { through: 'Character_Films' });
    Character.belongsToMany(Film, { through: 'Character_Films' });

    Film.belongsToMany(Genre, { through: 'Film_Genres' });
    Genre.belongsToMany(Film, { through: 'Film_Genres' });

    database.getSequalize().sync();
}

export default initModel;