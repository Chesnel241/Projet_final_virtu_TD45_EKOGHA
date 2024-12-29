const express = require('express');
const { getStudents, createStudent } = require('../controllers/studentsController');
const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/test-db', async (req, res) => {
    try {
      const result = await pool.query('SELECT 1');
      res.status(200).json({ message: 'Database connection is working', result: result.rows });
    } catch (err) {
      console.error('Error querying the database:', err.message);
      res.status(500).json({ error: 'Database connection failed' });
    }
  });
  
module.exports = router;
