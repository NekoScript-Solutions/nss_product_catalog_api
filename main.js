'use strict';

require('dotenv').config();

const { server } = require('./src/api/server');
const PORT = process.env.PORT;

server().listen(PORT);
