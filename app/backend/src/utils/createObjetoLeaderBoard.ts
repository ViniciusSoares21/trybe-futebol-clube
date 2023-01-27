import ITeams from '../interfaces/leaderboard';

const createObjetoTeams = (home:ITeams, team:ITeams, Tpoints:number, Tgame:number) => ({
  name: home.name,
  totalPoints: Number(home.totalPoints) + Number(team.totalPoints),
  totalGames: Number(home.totalGames) + Number(team.totalGames),
  totalVictories: Number(home.totalVictories) + Number(team.totalVictories),
  totalDraws: Number(home.totalDraws) + Number(team.totalDraws),
  totalLosses: Number(home.totalLosses) + Number(team.totalLosses),
  goalsFavor: Number(home.goalsFavor) + Number(team.goalsFavor),
  goalsOwn: Number(home.goalsOwn) + Number(team.goalsOwn),
  goalsBalance: Number(home.goalsBalance) + Number(team.goalsBalance),
  efficiency: ((Tpoints / (Tgame * 3)) * 100).toFixed(2),
});

const sortObjetoTeams = (array:ITeams[]) => array.sort((a, b) => b.totalPoints - a.totalPoints
|| b.totalVictories - a.totalVictories || b.goalsBalance - a.goalsBalance
|| b.goalsFavor - a.goalsFavor || a.goalsOwn - b.goalsOwn);

export { createObjetoTeams, sortObjetoTeams };
