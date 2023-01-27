import { Router } from 'express';
import MatchesController from '../controllers/matchers.controller';
import auth from '../middleware/auth';

const Controller = new MatchesController();

const matchersRouter = Router();

matchersRouter.get('/matches', Controller.getSeachInProgressOrlistAll);

matchersRouter.post('/matches', auth, Controller.createMatches);

matchersRouter.patch('/matches/:id/finish', Controller.updateInProgress);

matchersRouter.patch('/matches/:id', Controller.updateMatchesGoals);

export default matchersRouter;
