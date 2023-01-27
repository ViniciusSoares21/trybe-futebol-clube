import User from '../database/models/Users';
import { IUser } from '../interfaces/user';

export default class UserService {
  constructor(private userModel = User) {}

  public async getByUserEmail(email:string): Promise<IUser | null> {
    const user = await this.userModel.findOne({ where: { email } });

    return user;
  }
}
