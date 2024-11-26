const express = require("express")
const ip = require("ip")
const app = express()

app.get("/", (req, res) => {
    return res.json({
        message: "Hello from nodejs app",
        machine_ip: ip.address()
    })
})

app.get("/ping", (req, res) => {
    return res.json({
        message: "pong"
    })
})

app.listen(3000, () => {
    console.log("server is listening")
})