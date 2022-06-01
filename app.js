const express = require('express');
const app = express();
const mongooseConfig = require("./mongooseConfig");
const doctorRoute = require("./routes");

const port = 5000;

mongooseConfig();

app.use(express.json());
app.use("/", express.static("images"));
app.use("/", doctorRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})