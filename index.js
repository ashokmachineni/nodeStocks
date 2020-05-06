const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
//set handlebars middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.render("home");
});

const PORT = process.env.PORT || 6300;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`server running at ${PORT}`));