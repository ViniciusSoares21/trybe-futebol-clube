import { Router } from 'express';
import { getClassificationHome,
  getClassificationAway, getClassification } from '../controllers/leadBoard.controller';

const leadBoardRouter = Router();

leadBoardRouter.get('/leaderboard/home', getClassificationHome);

leadBoardRouter.get('/leaderboard/away', getClassificationAway);

leadBoardRouter.get('/leaderboard', getClassification);

export default leadBoardRouter;
