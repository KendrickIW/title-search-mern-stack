import { Router } from 'express';
import TitleController from '../../controllers/title';

const router: Router = Router();
const controller = new TitleController();

router.get('/', (req, res) => {
    controller.findAll().then((titles) => {
        res.json(titles);
    });
});

router.get('/:TitleName', (req, res) => {
    controller.findAllBy('TitleName', req.params.TitleName).then((titles) => {
        res.json(titles);
    });
});

export default router;
