import { Request, Response } from "express";

class UserController {
    index(req: Request, res: Response): Response {
        return res.send('index users');
    }

    show(req: Request, res: Response): Response {
        return res.send('show users');
    }

    create(req: Request, res: Response): Response {
        return res.json(req.body);
    }

    update(req: Request, res: Response): Response {
        return res.json(req.body);
    }

    delete(req: Request, res: Response): Response {
        return res.send('delete users');
    }
}

export default new UserController()