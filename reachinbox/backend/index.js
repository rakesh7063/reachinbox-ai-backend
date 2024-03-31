import express from 'express';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// check API
app.get('/', async (req, res) => {
     res.send('API working fine.');
});


// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
