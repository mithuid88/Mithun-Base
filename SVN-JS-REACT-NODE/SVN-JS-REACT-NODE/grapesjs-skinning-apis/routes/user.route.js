import express from 'express';
import { signup, login, verifyEmail, changePassword } from '../controllers/user.controller';

const userRoute = express.Router();

userRoute.post('/signup', signup);

userRoute.post('/login', login);

// forgot password
userRoute.post('/verifyEmail', verifyEmail);

userRoute.post('/changePassword', changePassword);

export default userRoute;
