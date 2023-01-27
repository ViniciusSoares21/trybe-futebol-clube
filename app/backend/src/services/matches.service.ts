import { IMatches, IMatchesGoals } from '../interfaces/matches';
import Matches from '../database/models/Matchers';
import Teams from '../database/models/Teams';

export default class MatchesService {
  constructor(private _MatchsModel = Matches) {}

  public getSeachInProgress = async (value:number): Promise<Matches[]> => {
    const inProgress = await this._MatchsModel.findAll({ where: { inProgress: value },
      include: [{ model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } }] });

    return inProgress;
  };

  public getListMatches = async (): Promise<Matches[]> => {
    const matches = await this._MatchsModel.findAll({ include: [
      { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } }] });

    return matches;
  };

  public getTeamesById = async (id:string): Promise<Matches | null> => {
    const teame = this._MatchsModel.findOne({ where: { id } });

    return teame;
  };

  public updateMatchesGoals = async (id:string, matches:IMatchesGoals) => {
    await this._MatchsModel.update({ ...matches }, { where: { id } });

    return { message: 'Update Goals' };
  };

  public createMatches = async (matches:IMatches): Promise<Matches> => {
    const newMatches = await this._MatchsModel.create({ ...matches, inProgress: 1 });

    return newMatches;
  };

  public updateInProgress = async (id:string) => {
    await this._MatchsModel.update({ inProgress: 0 }, { where: { id } });

    return { message: 'Finished' };
  };
}
