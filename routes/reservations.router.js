const express = require("express")
const ReservationsService = require("../services/reservations.service")

const reservationsServ = new ReservationsService
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const reservationsArray = await reservationsServ.getData()
        res.status(200).json({
            body: reservationsArray
        })
    } catch (error) {
        throw error
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const reservation = await reservationsServ.getOne(id)
        res.status(200).json({
            body: reservation
        })
    } catch (error) {
        throw error
    }
})

router.post("/", async (req, res) => {
    let body = req.body
    console.log(body)
    await reservationsServ.createData(body)
    res.status(201).json(
        {
            message: "Create Successfully"
        }
    )

})

router.patch("/:id", async (req, res) => {
    const { id } = req.params
    const body = req.body
    console.log(id)
    console.log(body)
    await reservationsServ.updateData(id, body)
    res.status(201).json({
        message: "Update successfully"
    })
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
    await reservationsServ.deleteData(id)
    res.status(200).json({
        message: "Delete Successfull"
    })
})

module.exports = router