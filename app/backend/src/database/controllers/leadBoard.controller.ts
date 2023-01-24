import { Request, Response } from 'express';

import * as leadBoardService from '../services/leadBoard.service';

const getClassification = async (req:Request, res:Response) => {
  try {
    const teams = await leadBoardService.getClassification();

    return res.status(200).json(teams);
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

export default getClassification;
