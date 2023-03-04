import { Request, Response } from 'express';
import TeamsService from '../service/teamServices';

export default class TeamController {
  constructor(private teamService = new TeamsService()) {}

  getAllTeams = async (_req: Request, res: Response) => {
    const teamsResults = await this.teamService.getAllTeams();
    res.status(200).json(teamsResults);
  };

  getTeamById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.teamService.getTeamById(Number(id));
    return res.status(200).json(result);
  };
}
