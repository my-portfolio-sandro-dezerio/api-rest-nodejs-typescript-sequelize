import { Application } from 'express';
import FilmController from '../controller/film';

class FilmRoutes {
    private film_controller: FilmController;

    constructor(){
        this.film_controller = new FilmController();
    }

    public route(app: Application) {
        app.post('/films/grid', this.film_controller.grid);

        app.get('/films/:id', this.film_controller.getById);

        app.post('/films', this.film_controller.create);

        app.put('/films/:id', this.film_controller.update);

        app.delete('/films/:id', this.film_controller.deleteById);
    }
}

export default FilmRoutes;