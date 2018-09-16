import { Router } from 'express';
import apiRouter from './api';

const router: Router = Router();

router.get('/', (req, res) => {
  res.send("Hello World");
});

router.use('/api', apiRouter);

export default router;
