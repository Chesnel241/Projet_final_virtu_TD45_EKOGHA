const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/students');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors()); 
app.use(bodyParser.json());
app.use('/students', studentRoutes);
app.get("/", (req, res) => {
    return res.json({ message: "Hello world!!!" });
})
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
