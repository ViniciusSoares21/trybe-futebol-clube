import ITeams from '../interfaces/leaderboard';
import Model from '../models';
import { createObjetoTeams, sortObjetoTeams } from '../utils/createObjetoLeaderBoard';
import { queryHome, queryAway } from '../utils/querys';

const getClassificationHome = async (): Promise<ITeams[]> => {
  const [result] = await Model.query(queryHome);

  return result as ITeams[];
};

const getClassificationAway = async (): Promise<ITeams[]> => {
  const [result] = await Model.query(queryAway);

  return result as ITeams[];
};

const getClassification = async () => {
  const aways = await getClassificationAway();
  const homes = await getClassificationHome();

  const leaderboard = homes.map((home) => {
    const team = aways.find((away) => away.name === home.name) as ITeams;

    const Tpoints = Number(home.totalPoints) + Number(team.totalPoints);
    const Tgame = Number(home.totalGames) + Number(team.totalGames);

    return createObjetoTeams(home, team, Tpoints, Tgame);
  });

  return sortObjetoTeams(leaderboard);
};

export { getClassificationHome, getClassificationAway, getClassification };
