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
    const userLogin = await this.userService.getLogin(email, password);
    if (userLogin !== null) {
      const token = jwt.sign({ data: userLogin }, secret, jwtConfig);
      return res.status(200).json({ token });
    }
    res.status(401).json({ message: 'Invalid email or password' });
  };
}
