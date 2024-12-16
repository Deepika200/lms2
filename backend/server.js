const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRouter = require('./routes/authRoutes'); // Assuming auth-router is in routes folder
const cors = require('cors');
app.use(cors());  // Enable CORS
// const studentRoutes = require('./routes/studentRoutes');
// const courseRoutes = require('./routes/courseRoutes');


// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use authRouter for authentication-related routes
app.use('/api', authRouter);
// app.use('/api', studentRoutes);

// Add to your API
// app.use('/api', courseRoutes);


// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
