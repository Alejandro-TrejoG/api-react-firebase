const express = require("express")

const router = express.Router()

let reservationsArray = []

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Products",
        body: reservationsArray
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({
        message: "Products",
        product: id,
    })
})

router.post("/", (req, res) => {
    let body = req.body
    body = Object.values(body)
    // const data = JSON.parse(body)
    reservationsArray = [...body]
    res.status(201).json(
        {
            body: reservationsArray
        }
    )
})

module.exports = router