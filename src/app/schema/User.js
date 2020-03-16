import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: Number,
  cep: String,
  logradouro: String,
  bairro: String,
});

export default mongoose.model('User', UserSchema);
