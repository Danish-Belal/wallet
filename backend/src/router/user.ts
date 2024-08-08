import {Router} from 'express'
import {userSignin, userSignup} from '../controller/user';
import { merchantSignin, merchantSignup } from '../controller/merchant';

export const userRouter = Router();
export const merchantRouter = Router();

userRouter.post('signup', userSignup)
userRouter.post('signin', userSignin)

merchantRouter.post('signup', merchantSignup)
merchantRouter.post('signin', merchantSignin)


