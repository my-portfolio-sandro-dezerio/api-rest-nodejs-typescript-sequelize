import { Request, Response } from 'express';

import Genre from '../model/genre.model';

class GenreController {

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

            const genre = await Genre.create(body);
    
            return res.status(201).json(genre);   
        } catch (error) {
            console.log(error);
        }
    }

    update(req: Request, res: Response) {

    }

    deleteById(req: Request, res: Response) {
        
    }

}

export default GenreController;