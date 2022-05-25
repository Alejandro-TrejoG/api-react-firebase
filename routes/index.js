const express = require("express")
const reservationsRouter = require("./reservations.router")

function routerApi(app) {
    const router = express.Router();
    app.use("/api", router)
    router.use("/reservations", reservationsRouter);
    // app.use("/categories", categoriesRouter);
}

module.exports = routerApi;