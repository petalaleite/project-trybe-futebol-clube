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
    return res.status(OK).json(matches);
    // corrigir depois: ok no teste. entretanto, quando não é passado nenhum parâmetro, ou null ou undefined na query ele retorna o inprogress: false.
  };

  updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchService.updateMatch(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(OK).json({ message: 'Successfully updated!' });
  };

  updateFinishedMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchService.updateFinishedMatch(Number(id));
    return res.status(OK).json({ message: 'Finished' });
  };

  createMatch = async (req: Request, res: Response) => {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    if (homeTeamId === awayTeamId) {
      return res.status(422).json(
        { message: 'It is not possible to create a match with two equal teams' },
      );
    }
    try {
      const matchCreated = await this.matchService.createMatch(
        homeTeamId,
        awayTeamId,
        homeTeamGoals,
        awayTeamGoals,
      ); // o certo é fazer uma interface
      return res.status(201).json(matchCreated);
    } catch (err) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
  };
}
