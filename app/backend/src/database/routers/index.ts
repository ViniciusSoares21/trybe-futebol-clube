import { Router } from 'express';
import userRouter from './user.router';
import matchersRouter from './matches.router';
import teamsRouter from './teams.router';

const router = Router();

router.use(userRouter);
router.use(matchersRouter);
router.use(teamsRouter);

export default router;
