import { Request, Response } from 'express';
import * as TeamsService from '../services/teams.service';

const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await TeamsService.getTeams();

    return res.status(200).json(teams);
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

const getTeamsId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const teamsId = await TeamsService.getTeamsId(id);

    return res.status(200).json(teamsId);
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

export { getTeams, getTeamsId };
