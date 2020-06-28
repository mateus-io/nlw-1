import path from 'path';
import express from 'express'
import UsersRoutes from './routes/UsersRoutes';
import ItemsRoutes from './routes/ItemsRoutes';
import PointsRoutes from './routes/PointsRoutes';
import CategoriesRoutes from './routes/CategoriesRoutes';
import ProductsRoutes from './routes/ProductsRoutes';
import cors from 'cors';
import '../config/getEnv';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/users', UsersRoutes );
app.use('/items', ItemsRoutes );
app.use('/points', PointsRoutes);
app.use('/categories', CategoriesRoutes);
app.use('/products', ProductsRoutes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);