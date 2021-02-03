import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware
app.use(cors());

// Built-In Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/payment', routes.payment);

// * Start * //

app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.PORT}!`),
);