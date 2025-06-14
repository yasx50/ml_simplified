import User from '../models/User.js';

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
    } = req.body;

    const avatar = req.avatarUrl || ''; // From middleware like multer/cloudinary

    // Create user with all fields
    const user = await User.create({
      name,
      username,
      email,
      avatar,
      bio,
      progress: 0, // optional: you can accept it from req.body if needed
    });

    return res.status(201).json({
      message: 'Student registered successfully',
      user,
    });
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Server error while registering student' });
  }
};

export default registerStudent;
