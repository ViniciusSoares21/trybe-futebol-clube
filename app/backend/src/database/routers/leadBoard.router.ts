import { Router } from 'express';
import { getClassificationHome, getClassificationAway } from '../controllers/leadBoard.controller';

const leadBoardRouter = Router();

leadBoardRouter.get('/leaderboard/home', getClassificationHome);

leadBoardRouter.get('/leaderboard/away', getClassificationAway);

export default leadBoardRouter;
