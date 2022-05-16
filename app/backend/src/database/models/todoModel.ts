import { DataTypes, Model } from 'sequelize';
import db from '.';

class Todo extends Model {
  declare id: number;

  declare subject: string;

  declare description: string;

  declare status: string;

  declare userId: string;
}

Todo.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  subject: { type: DataTypes.STRING, allowNull: true },
  description: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'Todo',
  // timestamps: true,
  underscored: true,
  tableName: 'todos',
});

export default Todo;
