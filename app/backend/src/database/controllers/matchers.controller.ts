import { Request, Response } from 'express';
import * as MatchersService from '../services/matches.service';

const getSeachInProgressOrlistAll = async (req: Request, res: Response) => {
  try {
    const { inProgress } = req.query;

    if (!inProgress) {
      const matches = await MatchersService.getListMatches();

      return res.status(200).json(matches);
    }

    let value = 0;

    if (inProgress === 'true') {
      value = 1;
    }

    const getInProgress = await MatchersService.getSeachInProgress(value as number);

    return res.status(200).json(getInProgress);
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

export default getSeachInProgressOrlistAll;
