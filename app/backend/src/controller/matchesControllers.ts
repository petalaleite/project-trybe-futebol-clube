import { Response, Request } from 'express';
import MatchServices from '../service/matchesServices';

const OK = 200;

export default class MatchController {
  constructor(private matchService = new MatchServices()) {}

  getAllMatches = async (req: Request, res: Response) => {
    const progress = req.query.inProgress;
    if (progress === 'true') {
      const matches = await this.matchService.getInProgressMatches();
      return res.status(OK).json(matches);
    } if (progress === 'false') {
      const matches = await this.matchService.getFinishedMatches();
      return res.status(OK).json(matches);
    }
    const matches = await this.matchService.getAllMatches();
    return res.status(200).json(matches);
    // corrigir depois: ok no teste. entretanto quando não é passado nenhum parâmetro, ou null ou undefined na query ele retorna o inprogress: false.
  };

  updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchService.updateMatch(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(OK).json({ message: 'Successfully updated!' });
  };
}
