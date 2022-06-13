import { Application } from 'express';
import GenreController from '../controller/genre';

class GenreRoutes {
    private genre_controller: GenreController;

    constructor(){
        this.genre_controller = new GenreController();
    }

    public route(app: Application) {
        app.post('/genres/grid', this.genre_controller.grid);

        app.get('/genres/:id', this.genre_controller.getById);

        app.post('/genres', this.genre_controller.create);

        app.put('/genres/:id', this.genre_controller.update);

        app.delete('/genres/:id', this.genre_controller.deleteById);
    }
}

export default GenreRoutes;