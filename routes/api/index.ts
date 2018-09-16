import { Router } from 'express';
import titlesApi from './titles';

const router: Router = Router();

router.use('/titles', titlesApi);

export default router;
