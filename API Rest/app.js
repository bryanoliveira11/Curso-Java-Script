import dotenv from 'dotenv';
dotenv.config();
import './src/database';
import {resolve} from 'path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import studentRoutes from './src/routes/studentRoutes';
import photoRoutes from './src/routes/photoRoutes';

const whitelist = [
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    }
    else {
      callback(new Error('Not Allowed by CORS'));
    }
  }
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/token/', tokenRoutes);
    this.app.use('/students/', studentRoutes);
    this.app.use('/photos/', photoRoutes);
  }
}

export default new App().app;
