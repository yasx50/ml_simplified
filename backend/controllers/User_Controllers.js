import User from '../models/User.js';
import StudentProfile from '../models/Profile.js';

/**
 * @desc Register a student with full details and avatar URL from middleware
 * @route POST /api/students/register
 */
const registerStudent = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      bio,
      socialLinks,
      interests
    } = req.body;

    const avatar = req.avatarUrl; // From middleware like multer/s3

    // Create user
    const user = await User.create({
      name,
      username,
      email,
      avatar
    });

    // Create student profile
    const studentProfile = await StudentProfile.create({
      userId: user.id,
      bio,
      socialLinks,
      interests
    });

    return res.status(201).json({
      message: 'Student registered successfully',
      user,
      studentProfile
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error while registering student' });
  }
};

export default registerStudent