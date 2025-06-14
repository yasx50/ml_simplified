import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/Database_Connection.js';
import User from './User.js';

class StudentProfile extends Model {}

StudentProfile.init(
  {
    bio: DataTypes.TEXT,
    socialLinks: {
      type: DataTypes.JSONB,
      defaultValue: {},
    },
    interests: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
  },
  {
    sequelize,
    modelName: 'StudentProfile',
  }
);

StudentProfile.belongsTo(User, { foreignKey: 'userId' });
User.hasOne(StudentProfile, { foreignKey: 'userId' });

export default StudentProfile;