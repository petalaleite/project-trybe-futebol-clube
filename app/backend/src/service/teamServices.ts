import TeamModel from '../database/models/TeamModel';

export default class TeamsService {
  getAllTeams = async () => {
    const teams = await TeamModel.findAll();
    return teams;
  };

  getTeamById = async (id: number) => {
    const team = await TeamModel.findOne({ where: { id } });
    return team;
  };
}
