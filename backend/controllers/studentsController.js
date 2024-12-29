const { getAllStudents, addStudent } = require('../models/studentModel');

const getStudents = async (req, res) => {
  try {
    const filterClass = req.query.class;
    const students = await getAllStudents(filterClass);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, surname, class: studentClass } = req.body;
    const student = await addStudent(name, surname, studentClass);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getStudents, createStudent };
