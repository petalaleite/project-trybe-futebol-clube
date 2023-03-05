// import { NextFunction, Request, Response } from 'express';

// export default async function validateJWT(req: Request, res: Response, next: NextFunction) {
//   const token = req.header('Authorization');
//   if (!token) res.status(401).json({ message: 'Token not found' });

//   const decoded = jwt.verify(token, secret);
//   next();
// }
