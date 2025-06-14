import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.js';
import User from './user.js';

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