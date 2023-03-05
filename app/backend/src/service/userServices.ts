import User from '../database/models/UserModel';

export default class UserService {
  getEmailAndPassword = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email, password } });
    return user;
  };
}
