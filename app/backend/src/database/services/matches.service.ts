import Matches from '../models/Matchers';
import Teams from '../models/Teams';

const getSeachInProgress = async (value:number) => {
  const inProgress = await Matches.findAll({ where: { inProgress: value },
    include: [{ model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } }] });

  return inProgress;
};

const getListMatches = async () => {
  const matches = await Matches.findAll({ include: [
    { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
    { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } }] });

  return matches;
};

export { getListMatches, getSeachInProgress };
