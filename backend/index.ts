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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});