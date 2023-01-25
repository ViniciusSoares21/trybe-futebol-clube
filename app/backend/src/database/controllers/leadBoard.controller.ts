import { Request, Response } from 'express';

import * as leadBoardService from '../services/leadBoard.service';

const getClassificationHome = async (req:Request, res:Response) => {
  try {
    const teams = await leadBoardService.getClassificationHome();

    return res.status(200).json(teams);
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

const getClassificationAway = async (req:Request, res:Response) => {
  try {
    const teams = await leadBoardService.getClassificationAway();

    return res.status(200).json(teams);
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

export { getClassificationHome, getClassificationAway };
