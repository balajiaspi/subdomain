const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the home page
app.get('/', (req, res) => {
    res.send(`<p>Hello Iam in sub domain logic ${req.url}</p>`);
});

app.post('/login', (req, res) => {
    if( req.body ) {
        res.redirect(`https://${req.body.username}.vidhyaan.com`);
    }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});