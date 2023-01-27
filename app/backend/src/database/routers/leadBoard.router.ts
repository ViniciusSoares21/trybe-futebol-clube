import { Router } from 'express';
import LeadBoardController from '../controllers/leadBoard.controller';

const Controller = new LeadBoardController();

const leadBoardRouter = Router();

leadBoardRouter.get('/leaderboard/home', Controller.getClassificationHome);

leadBoardRouter.get('/leaderboard/away', Controller.getClassificationAway);

leadBoardRouter.get('/leaderboard', Controller.getClassification);

export default leadBoardRouter;
