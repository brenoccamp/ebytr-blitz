import { DataTypes, Model } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;

  declare username: string;

  declare email: string;

  declare password: string;
}

User.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'User',
  // timestamps: true,
  underscored: true,
  tableName: 'users',
});

export default User;
