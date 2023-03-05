import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserService from '../service/userServices';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || 'tolkien';

export default class LoginController {
  constructor(private userService = new UserService()) {}

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userLogin = await this.userService.getEmailAndPassword(email, password);
    const token = jwt.sign({ data: userLogin }, secret, jwtConfig);
    res.status(200).json({ token });
  };
}
