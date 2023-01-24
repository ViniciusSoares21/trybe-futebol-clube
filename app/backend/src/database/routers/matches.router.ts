import { Router } from 'express';
import { getSeachInProgressOrlistAll,
  createMatches, updateInProgress, updateMatchesGoals } from '../controllers/matchers.controller';
import auth from '../middleware/auth';

const matchersRouter = Router();

matchersRouter.get('/matches', getSeachInProgressOrlistAll);

matchersRouter.post('/matches', auth, createMatches);

matchersRouter.patch('/matches/:id/finish', updateInProgress);

matchersRouter.patch('/matches/:id', updateMatchesGoals);

export default matchersRouter;
