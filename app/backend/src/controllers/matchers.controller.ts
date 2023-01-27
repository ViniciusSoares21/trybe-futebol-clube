import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import veryfyExistTeams from '../utils/verifyExitsTeames';

const message:object = { message: 'Erro interno' };

export default class MatchesController {
  constructor(private _MatchsService = new MatchesService()) {}

  public getSeachInProgressOrlistAll = async (req: Request, res: Response) => {
    try {
      const { inProgress } = req.query;

      if (!inProgress) {
        const matches = await this._MatchsService.getListMatches();

        return res.status(200).json(matches);
      }

      let value = 0;

      if (inProgress === 'true') {
        value = 1;
      }

      const getInProgress = await this._MatchsService.getSeachInProgress(value as number);

      return res.status(200).json(getInProgress);
    } catch (err:unknown) {
      return res.status(500).json({ message, error: err });
    }
  };

  public updateMatchesGoals = async (req: Request, res: Response) => {
    try {
      const updateGoals = await this._MatchsService.updateMatchesGoals(req.params.id, req.body);

      return res.status(200).json(updateGoals);
    } catch (err:unknown) {
      return res.status(500).json({ message, error: err });
    }
  };

  public createMatches = async (req: Request, res: Response) => {
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
      const newMatches = await this._MatchsService.createMatches(req.body);

      return res.status(201).json(newMatches);
    } catch (err:unknown) {
      return res.status(500).json({ message, error: err });
    }
  };

  public updateInProgress = async (req: Request, res: Response) => {
    try {
      const UpInProgress = await this._MatchsService.updateInProgress(req.params.id);

      return res.status(200).json(UpInProgress);
    } catch (err:unknown) {
      return res.status(500).json({ message, error: err });
    }
  };
}
