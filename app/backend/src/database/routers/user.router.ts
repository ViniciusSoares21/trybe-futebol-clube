import { Router } from 'express';
import login from '../controllers/login';
import getTypeUser from '../controllers/user.controller';
import auth from '../middleware/auth';
import validateLogin from '../middleware/validateLogin';

const userRouter = Router();

userRouter.post('/login', validateLogin, login);
userRouter.get('/login/validate', auth, getTypeUser);

export default userRouter;
