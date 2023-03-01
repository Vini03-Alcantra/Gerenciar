import express from "express";
import "dotenv/config"
import { router } from "./routes";
import "reflect-metadata";
import swaggerFile from "../../../../swagger/swagger_output.json"
import swaggerUi from "swagger-ui-express"

const app = express()
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use("/", router)

export {app}
