import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { Tpayload } from '../interfaces/user';

const secret = process.env.JWT_SECRET || 'secretJWT';

export default async function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  try {
    const payload = jwt.verify(token, secret) as Tpayload;

    req.body.userData = payload;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
}
