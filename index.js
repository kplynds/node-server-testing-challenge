require('dotenv').config();

const server = require("./api/server")

const port = process.env.PORT || 5005;

server.listen(port, () => console.log(`Server listening on port 5005`))