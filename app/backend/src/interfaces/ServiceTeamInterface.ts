import Team from './ITeam';

export default interface IServiceTeam {
  getAllTeams(): Promise<Team[]>
}
