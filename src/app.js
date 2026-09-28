import express from 'express';
import morgan from 'morgan'; // Logger -> lets you log who sent which request, which method, which endpoint;
import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());


app.use('/api/auth',authRouter); //this is prefix for whatever api is inside authRouter routes -> api/auth/<whatever> 

export default app;