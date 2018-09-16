import { Router } from 'express';
import path from 'path';
import apiRouter from './api';

const router: Router = Router();

router.use('/api', apiRouter);

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

export default router;
