import { Schema } from 'mongoose';

export const RituaisSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  resumo: {
    type: String,
    required: true,
  },
  status: {
    elemento: {
      type: String,
      enum: ['energia', 'medo', 'conhecimento', 'sangue', 'morte'],
      required: true,
    },
    circulo: {
      type: Number,
      min: 1,
      max: 4,
    },
    execucao: String,
    alcance: String,
    alvo: String,
    duracao: String,
    resistencia: String,
  },
  descricao: String,
  discente: {
    add: Number,
    texto: String,
  },
  verdadeiro: {
    add: Number,
    texto: String,
  },
});
