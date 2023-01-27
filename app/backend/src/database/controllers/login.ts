import { compare } from 'bcryptjs';
import { Request, Response } from 'express';

import UserService from '../services/user.service';
import generateToken from '../utils/gerateToken';

const service = new UserService();

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await service.getByUserEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordMatch = await compare(password, user?.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken(email);

    res.status(200).json({ token });
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
}
