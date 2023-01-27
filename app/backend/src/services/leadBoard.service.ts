import ITeams from '../interfaces/leaderboard';
import Model from '../database/models';
import { createObjetoTeams, sortObjetoTeams } from '../utils/createObjetoLeaderBoard';
import { queryHome, queryAway } from '../utils/querys';

export default class LeadBoardService {
  constructor(private _Model = Model) {}

  public getClassificationHome = async (): Promise<ITeams[]> => {
    const [result] = await this._Model.query(queryHome);

    return result as ITeams[];
  };

  public getClassificationAway = async (): Promise<ITeams[]> => {
    const [result] = await this._Model.query(queryAway);

    return result as ITeams[];
  };

  public getClassification = async (): Promise<ITeams[]> => {
    const aways = await this.getClassificationAway();
    const homes = await this.getClassificationHome();

    const leaderboard = homes.map((home) => {
      const team = aways.find((away) => away.name === home.name) as ITeams;

      const Tpoints = Number(home.totalPoints) + Number(team.totalPoints);
      const Tgame = Number(home.totalGames) + Number(team.totalGames);

      return createObjetoTeams(home, team, Tpoints, Tgame);
    });

    return sortObjetoTeams(leaderboard);
  };
}
