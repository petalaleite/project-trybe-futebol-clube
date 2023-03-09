import { Router } from 'express';
import validateJWT from '../middlewares/validateToken';
import MatchController from '../controller/matchesControllers';

const matchesRouter = Router();
const matchesController = new MatchController();

matchesRouter.get('/', matchesController.getAllMatches);
matchesRouter.patch('/:id/finish', validateJWT, matchesController.updateFinishedMatch);
matchesRouter.patch('/:id', validateJWT, matchesController.updateMatch);
matchesRouter.post('/', validateJWT, matchesController.createMatch);

export default matchesRouter;
