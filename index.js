const express = require("express")
const routerApi = require("./routes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/home", (req, res) => {
    res.send("Hola mundo")
})

routerApi(app)

app.listen(3000)