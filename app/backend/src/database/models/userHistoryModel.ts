import { DataTypes, Model } from 'sequelize';
import db from '.';

class UserHistory extends Model {
  declare id: number;

  declare userId: number;

  declare todoId: number;

  declare createdAt: Date;

  declare activity: string;
}

UserHistory.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  todoId: { type: DataTypes.INTEGER, allowNull: false },
  activity: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false },
}, {
  sequelize: db,
  modelName: 'UserHistory',
  timestamps: true,
  underscored: true,
  tableName: 'user_history',
});

export default UserHistory;
