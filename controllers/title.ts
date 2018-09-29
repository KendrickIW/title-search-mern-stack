import Title from '../models/title';
import { Request, Response } from 'express';

interface Controller {
  findAll: () => any;
  findAllBy: (property: string, value: string) => any;
}

class TitleController implements Controller {
  findAllBy(property: string, value: string) {
    return Title.find({ [property]: new RegExp(value, 'i')});
  }

  findAll() {
    return Title.find();
  }
}

export default TitleController;
