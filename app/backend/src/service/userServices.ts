import * as bcrypt from 'bcryptjs';
import User from '../database/models/UserModel';

export default class UserService {
  getLogin = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email } });
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  };
}
