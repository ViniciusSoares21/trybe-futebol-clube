import User from '../models/Users';

const getByUserEmail = async (email:string) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const get = () => '';

export { getByUserEmail, get };
