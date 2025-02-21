import { Request, Response } from "express";

class UserController {

    static getUsers(req: Request, res: Response) {

        res.json([{ id: 1, name: "João" }, { id: 2, name: "Maria" }]);
    }

    static createUser(req: Request, res: Response) {
       
        const { name } = req.body;
        res.status(201).json({ message: `Usuário ${name} criado com sucesso!` });
    }
}

export default UserController;