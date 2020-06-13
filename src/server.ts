import path from 'path';
import express from 'express'
import UsersRoutes from './routes/UsersRoutes';
import ItemsRoutes from './routes/ItemsRoutes';
import PointsRoutes from './routes/PointsRoutes';
import cors from 'cors';
import '../config/getEnv';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', UsersRoutes );
app.use('/items', ItemsRoutes );
app.use('/points', PointsRoutes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);