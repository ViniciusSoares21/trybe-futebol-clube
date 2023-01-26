import ITeams from '../interfaces/leaderboard';
import Model from '../models';
import { queryHome, queryAway } from '../utils/querys';

const getClassificationHome = async (): Promise<ITeams[]> => {
  const [result] = await Model.query(queryHome);

  return result as ITeams[];
};

const getClassificationAway = async (): Promise<ITeams[]> => {
  const [result] = await Model.query(queryAway);

  return result as ITeams[];
};

// eslint-disable-next-line max-lines-per-function
const getClassification = async () => {
  const aways = await getClassificationAway();
  const homes = await getClassificationHome();

  const leaderboard = homes.map((home) => {
    const team = aways.find((away) => away.name === home.name) as ITeams;

    const Tpoints = Number(home.totalPoints) + Number(team.totalPoints);
    const Tgame = Number(home.totalGames) + Number(team.totalGames);

    return {
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
    };
  });

  return leaderboard;
};

export { getClassificationHome, getClassificationAway, getClassification };
