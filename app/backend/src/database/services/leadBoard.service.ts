import Model from '../models';
import { queryHome, queryAway } from '../utils/querys';

const getClassificationHome = async () => {
  const [result] = await Model.query(queryHome);

  return result;
};

const getClassificationAway = async () => {
  const [result] = await Model.query(queryAway);

  return result;
};

// eslint-disable-next-line max-lines-per-function
const getClassification = async () => {
  const aways = await getClassificationAway();
  const homes = await getClassificationHome();

  const leaderboard = homes.map((home:any) => {
    const team = aways.find((away:any) => away.name === home.name) as any;

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
      efficiency: ((Number(home.totalPoints) + Number(team.totalPoints)
      / (Number(home.totalGames) + Number(team.totalGames) * 3)) * 100).toFixed(2),
    };
  });

  return leaderboard;
};

export { getClassificationHome, getClassificationAway, getClassification };
