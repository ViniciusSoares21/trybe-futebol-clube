import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private _UserService = new UserService()) {}

  public getTypeUser = async (req: Request, res: Response) => {
    try {
      const { data } = req.body.userData;

      const user = await this._UserService.getByUserEmail(data.email);
      return res.status(200).json({ role: user?.role });
    } catch (err:unknown) {
      return res.status(500).json({ message: 'Erro interno', error: err });
    }
  };
}
