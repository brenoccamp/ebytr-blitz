import { DataTypes, Model } from 'sequelize';
import db from '.';
import User from './userModel';

class Todo extends Model {
  declare id: number;

  declare subject: string;

  declare description: string;

  declare status: string;

  declare userId: number;

  declare createdAt: Date;

  declare updatedAt: Date;
}

Todo.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  subject: { type: DataTypes.STRING, allowNull: true },
  description: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  createdAt: DataTypes.TIME,
  updatedAt: DataTypes.DATE,
}, {
  sequelize: db,
  modelName: 'Todo',
  timestamps: true,
  underscored: true,
  tableName: 'todos',
});

Todo.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Todo;
