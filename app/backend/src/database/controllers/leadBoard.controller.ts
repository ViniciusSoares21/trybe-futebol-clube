import { Request, Response } from 'express';

import LeadBoardService from '../services/leadBoard.service';

const message:object = { message: 'Erro interno' };

export default class LeadBoardController {
  constructor(private _LeadBoardService = new LeadBoardService()) {}

  public getClassificationHome = async (_req:Request, res:Response) => {
    try {
      const teams = await this._LeadBoardService.getClassificationHome();

      return res.status(200).json(teams);
    } catch (err:unknown) {
      return res.status(500).json({ message, error: err });
    }
  };

  public getClassificationAway = async (_req:Request, res:Response) => {
    try {
      const teams = await this._LeadBoardService.getClassificationAway();

      return res.status(200).json(teams);
    } catch (err:unknown) {
      return res.status(500).json({ message, error: err });
    }
  };

  public getClassification = async (_req:Request, res:Response) => {
    try {
      const teams = await this._LeadBoardService.getClassification();

      return res.status(200).json(teams);
    } catch (err:unknown) {
      return res.status(500).json({ message, error: err });
    }
  };
}
