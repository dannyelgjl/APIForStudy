import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => {
  return res.json({
    User: {
      name: 'Daniel Gomes',
      idade: 22,
      end: {
        bairro: 'xyz',
        rua: 'jaozinho',
      },
    },
  });
});

export default routes;
