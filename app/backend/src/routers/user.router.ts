import { Router } from 'express';
import login from '../controllers/login';
import UserController from '../controllers/user.controller';
import auth from '../middleware/auth';
import validateLogin from '../middleware/validateLogin';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/login', validateLogin, login);
userRouter.get('/login/validate', auth, userController.getTypeUser);

export default userRouter;
