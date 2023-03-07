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

  updateMatch = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
    console.log(id, 'id recebido no service');
    const updatedMatch = await Match.update({ homeTeamGoals, awayTeamGoals }, {
      where: { id },
    });
    console.log(updatedMatch, 'updatedmatch no service');
    return updatedMatch;
  };

  updateFinishedMatch = async (id: number) => {
    const updateFinished = await Match.update({ inProgress: false }, {
      where: { id } });
    return updateFinished;
  };
}
