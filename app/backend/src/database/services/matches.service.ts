import Matches from '../models/Matchers';
import Teams from '../models/Teams';

const getListMatches = async () => {
  const matches = await Matches.findAll({ include: [
    { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
    { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } }] });

  return matches;
};

const get = () => '';

export { getListMatches, get };
