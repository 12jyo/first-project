const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    })
})

app.get("/add/:no1/:no2", (req, res) => {
    res.json({
        addition: (+req.params.no1) + (+req.params.no2)
    })
})

app.get("/sub/:no1/:no2", (req, res) => {
    res.json({
        subtraction: (+req.params.no1) - (+req.params.no2)
    })
})

app.get("/mul/:no1/:no2", (req, res) => {
    res.json({
        multiplication: (+req.params.no1) * (+req.params.no2)
    })
})

app.get("/div/:no1/:no2", (req, res) => {
    res.json({
        division: (+req.params.no1) / (+req.params.no2)
    })
})

app.listen(3000);
console.log("Hello World");