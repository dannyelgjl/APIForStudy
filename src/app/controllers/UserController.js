import User from '../schema/User';
import axios from 'axios';

class UserController {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }

  async show(req, res) {
    const user = await User.findById(req.params.id);

    return res.json(user);
  }

  async store(req, res) {
    const { nome, idade, cep } = req.body;

    const usuarioExiste = await User.findOne({ nome });

    if (usuarioExiste) {
      return res.status(401).json({ error: 'Usuário já existe' });
    }

    let usuario = await User.findOne({ cep });

    if (!usuario) {
      const apiRes = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      const { logradouro, bairro, localidade } = apiRes.data;

      usuario = await User.create({
        nome,
        idade,
        cep,
        localidade,
        logradouro,
        bairro,
      });
    }

    return res.json(usuario);
  }
}

export default new UserController();
