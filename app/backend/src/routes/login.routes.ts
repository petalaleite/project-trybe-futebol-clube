import { Router } from 'express';
import validateJWT from '../middlewares/validateToken';
import { validateLogin, validateEmail, validatePassword } from '../middlewares/validateLoginFields';
import LoginController from '../controller/LoginControllers';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', validateLogin, validateEmail, validatePassword, loginController.login);
loginRouter.get('/role', validateJWT, loginController.getRole);

export default loginRouter;
