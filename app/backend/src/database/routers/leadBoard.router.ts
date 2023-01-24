import { Router } from 'express';
import getClassification from '../controllers/leadBoard.controller';

const leadBoardRouter = Router();

leadBoardRouter.get('/leaderboard/home', getClassification);

export default leadBoardRouter;
