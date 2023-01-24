import { Request, Response } from 'express';
import * as MatchersService from '../services/matches.service';
import veryfyExistTeams from '../utils/verifyExitsTeames';

const message:object = { message: 'Erro interno' };

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
    return res.status(500).json({ message, error: err });
  }
};

const updateMatchesGoals = async (req: Request, res: Response) => {
  try {
    const updateGoals = await MatchersService.updateMatchesGoals(req.params.id, req.body);

    return res.status(200).json({ updateGoals });
  } catch (err:unknown) {
    return res.status(500).json({ message, error: err });
  }
};

const createMatches = async (req: Request, res: Response) => {
  try {
    if (req.body.homeTeamId === req.body.awayTeamId) {
      return res.status(422).json({
        message: 'It is not possible to create a match with two equal teams' });
    }

    const verifyTimes = await veryfyExistTeams([req.body.homeTeamId, req.body.awayTeamId]);

    if (verifyTimes) {
      return res.status(404).json({
        message: 'There is no team with such id!' });
    }
    const newMatches = await MatchersService.createMatches(req.body);

    return res.status(201).json(newMatches);
  } catch (err:unknown) {
    return res.status(500).json({ message, error: err });
  }
};

const updateInProgress = async (req: Request, res: Response) => {
  try {
    const UpInProgress = await MatchersService.updateInProgress(req.params.id);

    return res.status(200).json(UpInProgress);
  } catch (err:unknown) {
    return res.status(500).json({ message, error: err });
  }
};

export { getSeachInProgressOrlistAll, createMatches, updateInProgress, updateMatchesGoals };
