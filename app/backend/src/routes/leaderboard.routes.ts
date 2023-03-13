import { Router } from 'express';
import LeaderboardController from '../controller/leaderboardControllers';

const leaderboardRouter = Router();
const leaderboardController = new LeaderboardController();

leaderboardRouter.get('/home', leaderboardController.getHomeLeaderboard);
leaderboardRouter.get('/away', leaderboardController.getAwayLeaderboard);
// leaderboardRouter.patch('/:id/finish', leaderboardController);
// leaderboardRouter.patch('/:id', leaderboardController);
// leaderboardRouter.post('/', leaderboardController);

export default leaderboardRouter;
