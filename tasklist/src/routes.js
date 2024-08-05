import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/test", async (req, res) => {
  const user = await User.create({
    name: "vinicius",
    email: "vinicius@test.com",
    password_hash: "123",
  });
  return res.json(user);
});

export default routes;
