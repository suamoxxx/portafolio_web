const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "js")));
app.get('/curriculum', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log(__dirname)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});