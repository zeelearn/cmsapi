const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');
const http = require("http");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
// Enable gzip compression for server responses

app.use("/api/CMS", require("./api/CMS"));
app.use('/api/fileUpload', require('./api/fileUpload'));
// Start the server on port 8080
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
