const dbPool = require("./db");

export async function ambilListPengguna() {
  const [DATA] = await dbPool.query(`SELECT * FROM sys_user LIMIT 5`);
  return DATA;
}
