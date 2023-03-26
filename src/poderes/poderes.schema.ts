import { Schema } from 'mongoose';

export const PoderesSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  elemento: {
    type: String,
    required: true,
    enum: ['medo', 'energia', 'morte', 'sangue', 'conhecimento'],
  },
  descricao: {
    type: String,
    required: true,
  },
  afinidade: String,
  prerequisito: String,
});
