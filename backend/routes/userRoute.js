import express from 'express';
import {createUser, loginUser, loginAdmin} from '../controllers/usercontroller.js';

const router = express.Router();

// Route for creating a new user
router.post('/create', createUser);

// Route for user login
router.post('/login', loginUser);

// Route for admin login
router.post('/admin/login', loginAdmin);

export default router;