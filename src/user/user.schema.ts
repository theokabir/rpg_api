import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  character: {
    type: String,
    required: true,
  },
  rituais: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Rituais' }],
    default: [],
  },
  habilidades: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Habilidades' }],
    default: [],
  },
  poderes: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Poderes' }],
    default: [],
  },
  status: {
    pv: {
      atual: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
    },
    sn: {
      atual: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
    },
    pe: {
      atual: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
    },
  },
});
