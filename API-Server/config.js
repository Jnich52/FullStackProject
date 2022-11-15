module.exports = {
  dev: {
    connectionString: "",
    port: "8000",
  },
  production: {
    connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
    port: process.env.PORT,
  },
};
