import { Router } from 'express';
import userRouter from './user.router';
import matchersRouter from './matches.router';
import teamsRouter from './teams.router';
import leadBoardRouter from './leadBoard.router';

const router = Router();

router.use(userRouter);
router.use(matchersRouter);
router.use(teamsRouter);
router.use(leadBoardRouter);

export default router;
