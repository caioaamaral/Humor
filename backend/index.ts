import express from 'express';

import { router } from './routes/index';
import cors from 'cors';
import { connectDB } from './config/db';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', router);

connectDB()

app.listen(5000, '0.0.0.0', () => {
    console.log("Listening on port 5000...");
});