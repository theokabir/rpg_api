import { Schema } from 'mongoose';

export const HabilidadesSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
});
