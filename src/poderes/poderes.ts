import { Document } from 'mongoose';

export class Poderes extends Document {
  nome: string;
  elemento: string;
  descricao: string;
  afinidade: string;
  prerequisito: string;
}
