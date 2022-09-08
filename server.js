const express = require('express')
const app = express()

//set port for Heroku
const PORT = process.env.PORT || 3006;

//create route const
const apiRoute = require("./routes/apiRoute");
const htmlRoute = require("./routes/htmlRoute")

//middleware requirements
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

app.use("/api", apiRoute)
app.use("/", htmlRoute)

app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`);
})

