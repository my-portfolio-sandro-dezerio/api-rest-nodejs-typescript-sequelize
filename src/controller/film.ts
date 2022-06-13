import { Request, Response } from 'express';

import Film from '../model/film.model';

class FilmController {

    async grid(req: Request, res: Response) {
        const { body } = req;

        const skip: number = Number(body.skip || 0);
        const limit: number = Number(body.limit || 5);
    }

    getById(req: Request, res: Response) {

    }

    async create(req: Request, res: Response) {
        try {
            const { body } = req;

            const film = await Film.create(body);
    
            return res.status(201).json(film);
        } catch (error) {
            console.log(error);
        }
    }

    update(req: Request, res: Response) {

    }

    deleteById(req: Request, res: Response) {
        
    }

}

export default FilmController;