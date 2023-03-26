import { Document } from 'mongoose';

export class Ritual extends Document {
  nome: string;
  resumo: string;
  status: {
    elemento: string;
    circulo: number;
    execucao: string;
    alcance: string;
    alvo: string;
    duracao: string;
    resistencia: string;
  };
  descricao: string;
  discente: {
    add: number;
    texto: string;
  };
  verdadeiro: {
    add: number;
    texto: string;
  };
}
