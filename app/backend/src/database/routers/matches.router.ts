import { Router } from 'express';
import getListMatches from '../controllers/matchers.controller';

const matchersRouter = Router();

matchersRouter.get('/matches', getListMatches);

export default matchersRouter;
