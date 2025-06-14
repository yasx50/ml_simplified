import { Router } from "express";
import { upload } from '../helpers/Cloudinary_Config.js'; 
import registerStudent from '../controllers/User_Controllers.js'

const router = Router();

router.post("/add-student", upload.single('image'), registerStudent);




export default router;