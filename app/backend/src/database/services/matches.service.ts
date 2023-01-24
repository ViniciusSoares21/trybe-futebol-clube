import { IMatches, IMatchesGoals } from '../interfaces/matches';
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

const getTeamesById = async (id:string) => {
  const teame = Matches.findOne({ where: { id } });

  return teame;
};

const updateMatchesGoals = async (id:string, matches:IMatchesGoals) => {
  await Matches.update({ ...matches }, { where: { id } });

  return { message: 'Update Goals' };
};

const createMatches = async (matches:IMatches) => {
  const newMatches = await Matches.create({ ...matches, inProgress: 1 });

  return newMatches;
};

const updateInProgress = async (id:string) => {
  await Matches.update({ inProgress: 0 }, { where: { id } });

  return { message: 'Finished' };
};

export { getListMatches, getSeachInProgress, createMatches,
  updateInProgress, getTeamesById, updateMatchesGoals };
