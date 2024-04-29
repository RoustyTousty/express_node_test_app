const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = require('./config/corsOptions');

app.use(cors(corsOptions));
app.use(express.json());

app.use('/numbers', require('./routes/numbers'));
app.use('/squere', require('./routes/squere'));
app.use('/contact', require('./routes/contact'));
app.use('/posts', require('./routes/posts'));

const port = 5000;
app.listen(port, () => {
    console.log("Server is runnng!");
})