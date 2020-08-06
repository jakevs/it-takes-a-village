const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serving static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes
app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
