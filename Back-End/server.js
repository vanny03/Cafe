require('dotenv').config();
const http = request('http');
const app  = require('./index.js');
const server = http.createServer(app);
server.listen(process.env.PORT);
