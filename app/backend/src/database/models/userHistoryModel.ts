import { DataTypes, Model } from 'sequelize';
import db from '.';

class UserHistory extends Model {
  declare id: number;

  declare userId: string;

  declare todoId: string;

  declare createdAt: string;

  declare modification: string;
}

UserHistory.init({
  id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.STRING, allowNull: false },
  todoId: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.STRING, allowNull: false },
  modification: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'UserHistory',
  // timestamps: true,
  underscored: true,
  tableName: 'user_history',
});

export default UserHistory;
