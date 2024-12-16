const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route to get all courses
router.get('/', courseController.getCourses);

// Route to get course by courseId
router.get('/courses/:courseId', courseController.getCourseById);

module.exports = router;
