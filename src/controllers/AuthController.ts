import { Request, Response } from "express";
import User from "../models/User.ts";
import jwt from "jsonwebtoken";
import crypto from "crypto-js";
import dotenv from "dotenv";

dotenv.config();

class AuthController {
    static async register(req: Request, res: Response): Promise<any> {

        const { name, email, password } = req.body;

        const passwordCrypt = crypto.AES.encrypt(password, process.env.SECRET as string).toString()

        const user = new User({
            name,
            email,
            password: passwordCrypt
        });

        await user.save();

        return res.status(200).send({ message: "Usuário cadstrado com sucesso!" })

    }

    static async login(req: Request, res: Response): Promise<any> {

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {

            var bytes = crypto.AES.decrypt(user.password, process.env.SECRET as string);
            const passwordDecrypt = bytes.toString(crypto.enc.Utf8)

            if (password != passwordDecrypt) {
                return res.status(400).send({ message: "Email ou senha inválida" })
            }
        } else {

            return res.status(400).send({ message: "Email ou senha inválida" })
        }

        const secret = process.env.SECRET;
        const token = jwt.sign(
            {
                id: user._id,
            },
            secret as string,
            {
                expiresIn: '2 days'
            }
        );

        return res.status(200).send({ token: token })

    }
}

export default AuthController;