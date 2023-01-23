import { Request, Response } from 'express';
import * as MatchersService from '../services/matches.service';

const getListMatches = async (req: Request, res: Response) => {
  try {
    const matches = await MatchersService.getListMatches();

    return res.status(200).json(matches);
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

export default getListMatches;
