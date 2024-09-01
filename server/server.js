const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); //call the function so that it parses any json data that we may receieve from req.body in the routes

app.listen(port, () => {
  `App is listening on port ${port}`;
});
