const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Products"
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    res.status(200).json({
        message: "Products",
        product: id
    })
})

module.exports = router