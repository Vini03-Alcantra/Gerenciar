import express from "express"
import "reflect-metadata"

const app = express()

app.use(express.json())

app.get("/initial", (req, res) => {
    res.json({message: "Hello wolrd"})
})

export {app}
