describe("Postgres database", () => {
  it("is there a server?", (next) => {
    const { Pool } = require('pg');
    const pool = new Pool({
      connectionString: "postgres://postgres@localhost:5432"
      });
    pool.connect().then( (err, db) => {
      expect(err).toBe(null);
      next();
    });
  });
});
