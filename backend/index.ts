import express from 'express';

import { router } from './routes/index';
import cors from 'cors';

import { connectDB } from './config/db';
import { auth } from './config/auth';

const app = express();
const PORT = process.env.PORT || '5000';

app.use(cors({
  origin: process.env.HUMOR_FRONTEND_URL, // your frontend origin
  credentials: true // let the browser send cookies
}));

app.use(express.json());
app.use(auth);

app.use('/api', router);

connectDB()

app.listen(PORT, () => {
    console.log("Listening on port 5000...");
});
