import express, {NextFunction, Response, Request} from "express";
import "express-async-errors";
import { router } from "./routes";
import "../../container";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import createConnection  from "../typeorm";

createConnection()
const app = express()

app.use(express.json())

app.use("/", router)

export {app}
