import { Router } from 'express';
import TitleController from '../../controllers/title';

const router: Router = Router();
const controller = new TitleController();

router.get('/:TitleName', controller.findAll);

export default router;
