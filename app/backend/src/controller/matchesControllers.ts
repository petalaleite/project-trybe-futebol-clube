import { Response, Request } from 'express';
import MatchServices from '../service/matchesServices';

export default class MatchController {
  constructor(private matchService = new MatchServices()) {}

  getAllMatches = async (req: Request, res: Response) => {
    const matches = await this.matchService.getAllMatches();
    return res.status(200).json(matches);
  };
}
