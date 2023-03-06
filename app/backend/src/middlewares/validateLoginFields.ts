import { Request, Response, NextFunction } from 'express';

const INVALID_EMAIL_AND_PASSWORD = 'Invalid email or password';

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
  console.log(verify);
  if (!verify) return res.status(401).json({ message: INVALID_EMAIL_AND_PASSWORD });
  next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(401).json({ message: INVALID_EMAIL_AND_PASSWORD });
  }
  next();
}

export {
  validateLogin,
  validateEmail,
  validatePassword,
};
