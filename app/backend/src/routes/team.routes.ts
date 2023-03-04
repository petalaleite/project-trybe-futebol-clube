import { Router } from 'express';
import TeamController from '../controller/teamControllers';

const teamRouter = Router();
const teamController = new TeamController();

teamRouter.get('/', teamController.getAllTeams);
teamRouter.get('/:id', teamController.getTeamById);

export default teamRouter;
