import { getTeamesById } from '../services/matches.service';

const veryfyExistTeams = async (ids:string[]) => {
  const getIds = await Promise.all(ids.map((id) => getTeamesById(id)));
  const verify = getIds.includes(null);

  return verify;
};

export default veryfyExistTeams;
