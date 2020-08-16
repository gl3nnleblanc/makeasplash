require('dotenv').config()

module.exports = {
  development: {
    username: "postgres",
    password: "password",
    database: "dev",
// To find ip:
// docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' pudl-db
    host: "172.17.0.2",
    dialect: "postgres",
  },
  test: {
    url: "postgres://postgres@localhost:5432",
    dialect: "postgres",
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
  }
}
