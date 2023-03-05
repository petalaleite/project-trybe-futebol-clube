// import { Request, Response } from 'express';
// import jwt, { SignOptions } from 'jsonwebtoken';
// import UserService from '../service/userServices';

// const jwtConfig: SignOptions = {
//   expiresIn: '2d',
//   algorithm: 'HS256',
// };

// const secret = process.env.JWT_SECRET;

// export default class LoginController {
//   constructor(private userService = new UserService()) {}

//   login = async (req: Request, res: Response) => {
//     const { email, password } = req.body;
//     const userLogin = await this.userService.getEmailAndPassword(email, password);
//     const token = jwt.sign({ data: userLogin }, secret, jwtConfig);
//     res.status(200).json({ token });
//   };
// }
