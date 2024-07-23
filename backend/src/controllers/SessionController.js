// metodos: index, show, update, store, destroy
/**
 index: listagem de sessoes
 store: criar uma sessao
 show: listar unica sessão
 update: alterar sessao
 destroy: deletar sessao
 */

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    // Verificando se esse usuário já existe
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();