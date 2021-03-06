const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require("cors");
const bodyParser = require('body-parser');

const indexRouter = require('./router/index');
const chatBySocket = require('./chatBySocket');
const connectDB = require('./connectDB');

const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(indexRouter);
const io = socketIo(server);
chatBySocket(io);

server.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
