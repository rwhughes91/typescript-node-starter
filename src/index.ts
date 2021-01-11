import env from 'dotenv';
import express, { Application, Request, Response } from 'express';

env.config();

const app: Application = express();
app.use(express.json());

app.use('/', (req: Request, res: Response) => {
  res.send({});
});

if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
}
