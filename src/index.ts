import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 8000;

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello world');
});

app.listen(port, () => console.log(`App running on port ${port}`));