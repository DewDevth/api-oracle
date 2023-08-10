const oracledb = require("oracledb");

async function connectToDatabase() {
  try {
    // เชื่อมต่อกับฐานข้อมูล Oracle
    const connection = await oracledb.getConnection({
      user: "KPRUSR",
      password: "KPRUSR",
      connectString: "KPRAUD.KIMPAI.COM",
    });

    return connection;
  } catch (error) {
    throw new Error("Unable to connect to Oracle Database");
  }
}

module.exports = {
  connectToDatabase,
};
