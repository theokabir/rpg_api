import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  character: string;
  rituais: [string];
  habilidades: [string];
  poderes: [string];
  status: {
    pv: { atual: number; max: number };
    sn: { atual: number; max: number };
    pe: { atual: number; max: number };
  };
}
