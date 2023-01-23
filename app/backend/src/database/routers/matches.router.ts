import { Router } from 'express';
import getSeachInProgressOrlistAll from '../controllers/matchers.controller';

const matchersRouter = Router();

matchersRouter.get('/matches', getSeachInProgressOrlistAll);

export default matchersRouter;
