const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require('./dbConnect');
const morgan = require('morgan');
const cors = require('cors');


const artistRoutes = require ('./routes/artistRoutes');
const userRoutes = require ('./routes/userRoutes');
const imageRoutes = require ('./routes/imageRoutes');
const reviewRoutes = require ('./routes/reviewRoutes');
const worksRoutes = require('./routes/worksRoutes')
const loginRoutes = require('./routes/loginRoutes')


app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));



app.get("/", (req, res) => {
    res.json({ message: "Hello World (capstone project" });
});

app.use('/api/artist', artistRoutes)
app.use('/api/user',userRoutes)
app.use('/api/image', imageRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/works', worksRoutes)
app.use('/api/login', loginRoutes)


// set port, listen for requests
const PORT = process.env.PORT || 5081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});