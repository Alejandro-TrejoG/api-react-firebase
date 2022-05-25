const express = require("express")
const routerApi = require("./routes")

const app = express()

app.get("/home", (req, res) => {
    res.send("Hola mundo")
})

routerApi(app)

app.listen(3000)