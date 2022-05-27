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

router.post("/", (req, res) => {
    let body = req.body
    body = Object.values(body)
    // const data = JSON.parse(body)
    const reservationsArray = [...body]
    res.status(201).json(
        {
            body: reservationsArray
        }
    )
})

router.patch("/:id", (req, res) => {
    const { id } = req.params
    const { body } = req.body
    reservationsArray.forEach(reservation => {
        if (reservation.id == id) {

        }
    })
})

module.exports = router