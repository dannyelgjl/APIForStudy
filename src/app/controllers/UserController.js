import User from '../schema/User';
import axios from 'axios';

class UserController {
  async index(req, res) {
    const user = await User.find();

    return res.json(user);
  }

  async store(req, res) {
    // https://viacep.com.br/ws/${cep}/json/

    const { nome, idade, cep } = req.body;

    let usuario = await User.findOne({ cep });

    if (!usuario) {
      const apiResponse = await axios.get(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      const { logradouro, bairro } = apiResponse.data;

      usuario = await User.create({
        nome,
        idade,
        cep,
        logradouro,
        bairro,
      });
    }

    return res.json(usuario);
  }
}

export default new UserController();
