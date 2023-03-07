import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';

export default class MatchServices {
  getAllMatches = async () => {
    const matches = await Match.findAll({ include: [
      { model: Team, as: 'homeTeam' },
      { model: Team, as: 'awayTeam' },
    ] });
    return matches;
  };

  getInProgressMatches = async () => {
    const inProgress = await Match.findAll({ where: { inProgress: true },
      include: [
        { model: Team, as: 'homeTeam' },
        { model: Team, as: 'awayTeam' },
      ] });

    return inProgress;
  };

  getFinishedMatches = async () => {
    const finished = await Match.findAll({ where: { inProgress: false },
      include: [
        { model: Team, as: 'homeTeam' },
        { model: Team, as: 'awayTeam' },
      ] });
    return finished;
  };
}
