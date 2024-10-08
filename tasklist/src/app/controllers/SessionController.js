import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    // Checking if the e-mail exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Usuário não existe." });
    }

    // Check if the password matches
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expirtesIn,
      }),
    });
  }
}

export default new SessionController();
