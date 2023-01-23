import { Router } from 'express';
import { getTeams, getTeamsId } from '../controllers/teams.controller';

const teamsRouter = Router();

teamsRouter.get('/teams', getTeams);

teamsRouter.get('/teams/:id', getTeamsId);

export default teamsRouter;
