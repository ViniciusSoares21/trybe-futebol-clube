import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const controller = new TeamsController();

const teamsRouter = Router();

teamsRouter.get('/teams', controller.getTeams);

teamsRouter.get('/teams/:id', controller.getTeamsId);

export default teamsRouter;
