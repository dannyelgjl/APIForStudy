import User from '../schema/User';

class UserController {
  async store(req, res) {
    // https://viacep.com.br/ws/${cep}/json/

    const { nome, idade, cep, logradouro, bairro } = req.body;

    const user = await User.create({
      nome,
      idade,
      cep,
      logradouro,
      bairro,
    });

    return res.json(user);
  }
}

export default new UserController();
