import Title from '../models/title';
import { Request, Response } from 'express';

interface Controller {
  findAll: (req: Request, res: Response) => void;
}

class TitleController implements Controller {
  findAll(req: Request, res: Response) {
    Title.find(req.params).then((titles) => {
      res.json(titles);
    });
  }
}

export default TitleController;
