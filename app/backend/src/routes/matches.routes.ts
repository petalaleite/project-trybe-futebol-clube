import { Router } from 'express';
import validateJWT from '../middlewares/validateToken';
import MatchController from '../controller/matchesControllers';

const matchesRouter = Router();
const matchesController = new MatchController();

matchesRouter.get('/', matchesController.getAllMatches);
// matchesRouter.patch('/:id/finish', matchesController);
matchesRouter.patch('/:id', validateJWT, matchesController.updateMatch);
// matchesRouter.post('/', matchesController);

export default matchesRouter;
