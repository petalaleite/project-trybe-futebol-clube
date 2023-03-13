import Match from '../database/models/MatchModel';
import MatchServices from './matchesServices';
import TeamsService from './teamServices';

function countResults(arr: string[], value: string): number {
  return arr.filter((e) => e === value).length;
}

function calcPoints(wins: number, draws: number) {
  return (wins * 3) + draws * 2;
}

function mapResults(arr: Match[]) {
  return arr.map((e) => {
    if (e.homeTeamGoals > e.awayTeamGoals) return 'win';
    if (e.homeTeamGoals === e.awayTeamGoals) return 'draw';
    return 'loss';
  });
}

export default class LeaderboardServices {
  constructor(
    private matchService = new MatchServices(),
    private teamService = new TeamsService(),
  ) {}

  getHomeLeaderboard = async () => {
    const teams = await this.teamService.getAllTeams();
    const matches = await this.matchService.getFinishedMatches();
    const leaderboardMap = teams.map((team) => {
      const teamMatch = matches.filter((e) => e.homeTeamId === team.id);
      const matchResult = mapResults(teamMatch);
      const wins = countResults(matchResult, 'win');
      const draws = countResults(matchResult, 'draw');
      return { name: team.teamName,
        totalPoints: calcPoints(wins, draws),
        totalGames: teamMatch.length,
        totalVictories: wins,
        totalDraws: draws,
        totalLosses: countResults(matchResult, 'losses'),
        goalsFavor: teamMatch.map((e) => e.homeTeamGoals).reduce((acc, next) => acc + next),
        goalsOwn: teamMatch.map((e) => e.awayTeamGoals).reduce((acc, next) => acc + next),
      };
    });
    return leaderboardMap;
  };

  getAwayLeaderboard = async () => {
    const teams = await this.teamService.getAllTeams();
    const matches = await this.matchService.getFinishedMatches();
    const leaderboardMap = teams.map((team) => {
      const teamMatch = matches.filter((e) => e.awayTeamId === team.id);
      const matchResult = mapResults(teamMatch);
      const wins = countResults(matchResult, 'win');
      const draws = countResults(matchResult, 'draw');
      return { name: team.teamName,
        totalPoints: calcPoints(wins, draws),
        totalGames: teamMatch.length,
        totalVictories: wins,
        totalDraws: draws,
        totalLosses: countResults(matchResult, 'losses'),
        goalsFavor: teamMatch.map((e) => e.homeTeamGoals).reduce((acc, next) => acc + next),
        goalsOwn: teamMatch.map((e) => e.awayTeamGoals).reduce((acc, next) => acc + next),
      };
    });
    return leaderboardMap;
  };
}
