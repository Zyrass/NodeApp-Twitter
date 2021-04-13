require("colors")
require("./config/db")

const path = require("path")
const express = require("express")
const morgan = require("morgan")
const routing = require("./routes")

const app = express()
const port = process.env.PORT || 8080

// Setters
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

// Middleware
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routing
app.use(routing)

app.listen(port, () => {
  console.log(`
    \n\tServeur connecté sur le port ${port}
  `.bgCyan.white.bold)
})