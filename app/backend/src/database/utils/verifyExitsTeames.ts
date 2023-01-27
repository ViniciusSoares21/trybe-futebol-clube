import MatchesService from '../services/matches.service';

const service = new MatchesService();

const veryfyExistTeams = async (ids:string[]) => {
  const getIds = await Promise.all(ids.map((id) => service.getTeamesById(id)));
  const verify = getIds.includes(null);

  return verify;
};

export default veryfyExistTeams;
