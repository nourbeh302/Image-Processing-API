import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import routes from './routes/index'

const app: Application = express();
const port: number = 8000;

app.use(morgan('dev'))
app.use('/api', routes)

app.listen(port, () => console.log(`App running on port ${port}`));

export default app;