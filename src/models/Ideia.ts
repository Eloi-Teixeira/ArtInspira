import mongoose, { Schema, Document } from 'mongoose';

interface IAuthor {
  name: string;
  link: string;
  source: string;
}

interface IPalette {
  colors: string[];
  description: string;
  sugestion: string;
  author: IAuthor;
  file: string;
}

export interface IIdeia extends Document {
  ideia: {
    title: string;
    text: string;
  };
  palette: IPalette[];
}

const AuthorSchema = new Schema<IAuthor>({
  name: String,
  link: String,
  source: String,
}, { _id: false });

const PaletteSchema = new Schema<IPalette>({
  colors: [String],
  description: String,
  sugestion: String,
  author: AuthorSchema,
  file: String,
}, { _id: false });

const IdeiaSchema = new Schema<IIdeia>({
  ideia: {
    title: { type: String, required: true, unique: true },
    text: { type: String, required: true },
  },
  palette: [PaletteSchema],
});

export const Ideia = mongoose.models.Ideia || mongoose.model<IIdeia>('Ideia', IdeiaSchema);
