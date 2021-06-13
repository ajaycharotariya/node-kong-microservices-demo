// Dependencies
const express = require("express")
const cors = require('cors')

// Init
const app = express();
const PORT = process.env.PORT || 3003

app.use(cors())
app.use(express.json());
app.get("/", (req, res) => res.json({ msg: "You reached your microservices endpoint from kong" }))
app.get("/ping", (req, res) => res.json({ msg: "Welcome" }))

process.on('SIGINT', function () {
    setTimeout(() => {
        process.exit(0)
    }, 1000)
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`)
})
