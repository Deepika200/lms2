const db = require('../models/db');  // assuming db.js handles the MySQL connection

// Fetch all courses
const getCourses = (req, res) => {
  db.query('SELECT * FROM courses', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching courses');
    } else {
      res.json(results);
    }
  });
};

// Fetch a specific course by courseId
const getCourseById = (req, res) => {
  const { courseId } = req.params;
  db.query('SELECT * FROM courses WHERE courseid = ?', [courseId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching course');
    } else if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Course not found');
    }
  });
};

// Export both methods
module.exports = { getCourses, getCourseById };
