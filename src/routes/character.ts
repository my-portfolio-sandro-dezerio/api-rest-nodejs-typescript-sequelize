import { Application } from 'express';
import CharacterController from '../controller/character';

class CharacterRoutes {
    private character_controller: CharacterController;

    constructor(){
        this.character_controller = new CharacterController();
    }

    public route(app: Application) {
        app.post('/characters/grid', this.character_controller.grid);

        app.get('/characters/:id', this.character_controller.getById);

        app.post('/characters', this.character_controller.create);

        app.put('/characters/:id', this.character_controller.update);

        app.delete('/characters/:id', this.character_controller.deleteById);
    }
}

export default CharacterRoutes;