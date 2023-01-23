import Teams from '../models/Teams';

const getTeams = async () => {
  const teams = await Teams.findAll();

  return teams;
};

const getTeamsId = async (id:string) => {
  const teams = await Teams.findOne({ where: { id } });

  return teams;
};

export { getTeams, getTeamsId };
