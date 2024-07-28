module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "password",
  database: "tasklist",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
