/**TODO
 *
 * 1) Find a way to test if this express.urlencoded is working properly
 */

const path = require("path");
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public"))); // we need the ../public because the public directory is located outside of this directory

app.use(express.urlencoded({ extended: false })); //this will parse url encoded data

app.use(express.json()); //call the function so that it parses any json data that we may receieve from req.body in the routes

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
