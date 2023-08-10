const { connectToDatabase } = require("../database/db"); // เรียกใช้โมดูล connectToDatabase จากไฟล์ db.js
const fs = require("fs");
const path = require("path");

async function getEmployees(req, res) {
  try {
    // เชื่อมต่อกับฐานข้อมูล
    const connection = await connectToDatabase();
    // หาที่อยู่ของไฟล์ .sql
    const sqlFilePath = path.join(
      __dirname,
      "../sql/employee/getEmployees.sql"
    );
    // อ่านไฟล์ SQL แยก
    const sql = fs.readFileSync(sqlFilePath, "utf-8");

    // ดำเนินการกับฐานข้อมูล (ตัวอย่าง: ส่งคำสั่ง SQL)
    const result = await connection.execute(sql, { limit: 15 });

    // ปิดการเชื่อมต่อ
    await connection.close();

    const rows = result.rows.map((row) => {
      const rowData = {};
      result.metaData.forEach((meta, index) => {
        rowData[meta.name] = row[index];
      });
      return rowData;
    });
    // ส่งข้อมูลกลับไปยังผู้ใช้งาน
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error fetching employee data");
  }
}

async function getAllEmployees(req, res) {
  try {
    // เชื่อมต่อกับฐานข้อมูล
    const connection = await connectToDatabase();
    // หาที่อยู่ของไฟล์ .sql
    const sqlFilePath = path.join(
      __dirname,
      "../sql/employee/getAllEmployees.sql"
    );
    // อ่านไฟล์ SQL แยก
    const sql = fs.readFileSync(sqlFilePath, "utf-8");

    // ดำเนินการกับฐานข้อมูล (ตัวอย่าง: ส่งคำสั่ง SQL)
    const result = await connection.execute(sql, { limit: 5 });

    // ปิดการเชื่อมต่อ
    await connection.close();

    const rows = result.rows.map((row) => {
      const rowData = {};
      result.metaData.forEach((meta, index) => {
        rowData[meta.name] = row[index];
      });
      return rowData;
    });

    // ส่งข้อมูลกลับไปยังผู้ใช้งาน
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error fetching employee data");
  }
}

module.exports = {
  getEmployees,
  getAllEmployees,
};
