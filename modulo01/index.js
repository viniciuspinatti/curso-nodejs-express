const express = require("express");

const server = express();

server.use(express.json());

// Query param = ?nome=NodeJS
// Route param = /curso/2
// Request body = { attributo: 1, attributo: 'dois' }

const cursos = ["Node JS", "JavaScript", "Vue"];

// Middelware global
server.use((req, res, next) => {
  console.log(`URL CHAMADA: ${req.url}`);

  return next();
});

function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do curso é obrigatório" });
  }

  return next();
}

server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;
  return res.json(cursos[index]);
});

// Criando curso
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// Atualizando curso
server.put("/cursos/:index", checkCurso, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Excluindo curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: "Curso deletado com sucesso!" });
});

server.listen(3000);
