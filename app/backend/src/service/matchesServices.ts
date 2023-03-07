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
}
