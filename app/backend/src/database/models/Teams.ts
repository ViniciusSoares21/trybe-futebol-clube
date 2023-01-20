import { Model, INTEGER, STRING } from 'sequelize';
import Matchers from './Matchers';
import db from '.';

class Teams extends Model {
  declare id: number;
  declare teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Teams.hasMany(Matchers, { foreignKey: 'id', as: 'Matchers' });
Matchers.belongsTo(Teams, { foreignKey: 'id', as: 'Teams' });

export default Teams;
