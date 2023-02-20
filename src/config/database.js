//Credenciais de Acesso ao Banco de Dados

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "231090",
  database: "sqlnode",
  define: {
    timestamps: true,
    underscored: true,
  },
};
