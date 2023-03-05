import { Request, Response, NextFunction } from 'express';

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
}

function validateEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const verify = regex.test(email);
  if (!verify) return res.status(400).json({ message: 'Invalid email or password' });
  next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (password.length < 6) res.status(400).json({ message: 'Invalid email or password' });
  next();
}

export {
  validateLogin,
  validateEmail,
  validatePassword,
};
