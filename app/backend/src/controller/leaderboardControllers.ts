import { Request, Response } from 'express';
import LeaderboardServices from '../service/leaderboardServices';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardServices()) {}

  getHomeLeaderboard = async (_req: Request, res: Response) => {
    const homeLeaderboard = await this.leaderboardService.getHomeLeaderboard();
    return res.status(200).json(homeLeaderboard);
  };

  getAwayLeaderboard = async (_req: Request, res: Response) => {
    const awayLeaderboard = await this.leaderboardService.getAwayLeaderboard();
    return res.status(200).json(awayLeaderboard);
  };
}
