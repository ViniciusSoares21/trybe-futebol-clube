import { Router } from 'express';
import { getSeachInProgressOrlistAll,
  createMatches, updateInProgress } from '../controllers/matchers.controller';
import auth from '../middleware/auth';

const matchersRouter = Router();

matchersRouter.get('/matches', getSeachInProgressOrlistAll);

matchersRouter.post('/matches', auth, createMatches);

matchersRouter.patch('/matches/:id/finish', updateInProgress);

export default matchersRouter;
