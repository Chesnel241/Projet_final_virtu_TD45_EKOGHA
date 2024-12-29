const pool = require('../db/db');

const getAllStudents = async (filterClass) => {
  const query = filterClass
    ? 'SELECT * FROM students WHERE class = $1'
    : 'SELECT * FROM students';
  const values = filterClass ? [filterClass] : [];
  const { rows } = await pool.query(query, values);
  return rows;
};

const addStudent = async (name, surname, studentClass) => {
  const query = 'INSERT INTO students (name, surname, class) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, surname, studentClass];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = { getAllStudents, addStudent };
