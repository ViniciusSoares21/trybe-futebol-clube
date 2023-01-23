import { Request, Response } from 'express';
import * as UserService from '../services/user.service';

const getTypeUser = async (req: Request, res: Response) => {
  try {
    const { data } = req.body.userData;

    const user = await UserService.getByUserEmail(data.email);

    return res.status(200).json({ role: user?.role });
  } catch (err:unknown) {
    return res.status(500).json({ message: 'Erro interno', error: err });
  }
};

export default getTypeUser;
