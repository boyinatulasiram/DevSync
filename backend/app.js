import express from 'express';
// import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import workspaceRoutes from './routes/workspaceRoutes.js';
// import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
connectDB();


app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/workspaces', workspaceRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
