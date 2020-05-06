const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const request = require("request");

const app = express();

//api key pk_e7fd75caea4b405cb200bed5d06ece3c
//https://cloud.iexapis.com/stable/stock/aapl/quote?token=YOUR_TOKEN_HERE
request(
    "https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_e7fd75caea4b405cb200bed5d06ece3c", { json: true },
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }

        if (res.statusCode === 200) {
            console.log(body);
        }
    }
);

//set handlebars middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    res.render("home");
});
//about page route
app.get("/about.html", function(req, res) {
    res.render("about");
});

const PORT = process.env.PORT || 6300;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`server running at ${PORT}`));