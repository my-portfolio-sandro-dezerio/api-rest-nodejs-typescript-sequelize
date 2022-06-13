import { Request, Response } from 'express';

import Character from '../model/character.model';

class CharacterController {

    async grid(req: Request, res: Response) {
        const { body } = req;

        const skip: number = Number(body.skip || 0);
        const limit: number = Number(body.limit || 5);
    }

    getById(req: Request, res: Response) {

    }

    create(req: Request, res: Response) {

    }

    update(req: Request, res: Response) {

    }

    deleteById(req: Request, res: Response) {
        
    }

}

export default CharacterController;