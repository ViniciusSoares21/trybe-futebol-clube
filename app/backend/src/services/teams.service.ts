import Teams from '../database/models/Teams';

export default class TeamsService {
  constructor(private _TeamsModel = Teams) {}

  public getTeams = async (): Promise<Teams[]> => {
    const teams = await this._TeamsModel.findAll();
    return teams;
  };

  public getTeamsId = async (id:string): Promise<Teams | null> => {
    const teams = await this._TeamsModel.findOne({ where: { id } });
    return teams;
  };
}
