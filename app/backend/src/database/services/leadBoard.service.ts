import Model from '../models';
import { queryHome, queryAway } from '../utils/querys';

const getClassificationHome = async () => {
  const [result] = await Model.query(queryHome);

  return result;
};

const getClassificationAway = async () => {
  const [result] = await Model.query(queryAway);

  return result;
};

export { getClassificationHome, getClassificationAway };
