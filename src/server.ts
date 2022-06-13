import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import config from './config';
import database from './database';
import initModel from './model';

import CharacterRoutes from './routes/character';
import FilmRoutes from './routes/film';
import GenreRoutes from './routes/genre';

class Server {
    public app: Application;

    private character_routes: CharacterRoutes = new CharacterRoutes();
    private film_routes: FilmRoutes = new FilmRoutes();
    private genre_routes: GenreRoutes = new GenreRoutes();

    constructor() {
        this.app = express();

        this.init();

        this.character_routes.route(this.app);
        this.film_routes.route(this.app);
        this.genre_routes.route(this.app);
    }

    public init(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(morgan('dev'));

        this.app.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });

        database.getInstance().init();
        initModel();
    }
}

export default Server;