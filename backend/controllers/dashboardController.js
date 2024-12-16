// dashboardControllers.js

const db = require('../models/db');  // assuming db.js handles the MySQL connection

// Function to get student details by userid
const getStudentByUserId = (req, res) => {
  const userId = req.params.userid;  // get the userid from the request params

  const query = `SELECT * FROM students WHERE userid = ?`;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching student data:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Return the student data
    res.status(200).json(results[0]);
  });
};

module.exports = { getStudentByUserId };
