import { Router } from 'express';
import MatchController from '../controller/matchesControllers';

const matchesRouter = Router();
const matchesController = new MatchController();

matchesRouter.get('/', matchesController.getAllMatches);
// matchesRouter.get('/', matchesController);
// matchesRouter.patch('/:id/finish', matchesController);
// matchesRouter.patch('/:id', matchesController);
// matchesRouter.post('/', matchesController);

export default matchesRouter;
