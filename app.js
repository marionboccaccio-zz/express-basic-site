const express = require("express");
const hbs = require("hbs");
const path = require("path");
const server = express();
const port = 9000;

server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");
server.get("/", (request, response) => {
  response.render("home", {
    title: "Discover the power of Nunchi"
  });
});

server.get("/about", (request, response) => {
  response.render("about");
});

server.get("/gallery", (request, response) => {
  response.render("gallery");
});

server.listen(port, () =>
  console.log(`server is up @http://localhost:${port}`)
);
