import express from 'express';
import { registerUser, loginUser, authMiddleware } from '../controllers/authController.js';
const router = express.Router();


//register route
router.post('/register', registerUser);

//login route
router.post('/login', loginUser);

//protected route example
router.get('/protected',authMiddleware, (req, res) => {
    res.send("This is a protected route");
});
export default router;
