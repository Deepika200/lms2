// studentRoutes.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Route to get student data by userid
router.get('/dashboard/:userid', dashboardController.getStudentByUserId);

module.exports = router;
