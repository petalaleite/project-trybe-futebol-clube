import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'tolkien';

export default async function validateJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.header('authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, secret);
    console.log('log do decoded', decoded);
    res.locals.userLogin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
