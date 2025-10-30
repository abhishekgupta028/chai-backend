import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));  // for parsing application/json
app.use(express.urlencoded({limit: "16kb", extended: true}));  // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));  // for serving static files
app.use(cookieParser());  // for parsing cookies


// routes import added here

import userRouter from './routes/user.routes.js';

// routes declaration added here

app.use('/api/v1/users', userRouter);
//https://localhost:8000/api/v1/users/register

export { app };