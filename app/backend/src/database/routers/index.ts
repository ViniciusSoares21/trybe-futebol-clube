import { Router } from 'express';
import userRouter from './user.router';
import matchersRouter from './matches.router';

const router = Router();

router.use(userRouter);
router.use(matchersRouter);

export default router;
