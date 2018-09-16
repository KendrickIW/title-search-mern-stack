import { Schema, model } from 'mongoose';

const Title: Schema = new Schema({
  TitleName: String
});

export default model('Title', Title, 'Titles');
