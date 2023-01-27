import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

export default class TeamsController {
  constructor(private _TeamsService = new TeamsService()) {}

  public getTeams = async (_req: Request, res: Response) => {
    try {
      const teams = await this._TeamsService.getTeams();

      return res.status(200).json(teams);
    } catch (err:unknown) {
      return res.status(500).json({ message: 'Erro interno', error: err });
    }
  };

  public getTeamsId = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const teamsId = await this._TeamsService.getTeamsId(id);

      return res.status(200).json(teamsId);
    } catch (err:unknown) {
      return res.status(500).json({ message: 'Erro interno', error: err });
    }
  };
}
