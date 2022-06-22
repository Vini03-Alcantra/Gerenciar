import express from "express";
import "dotenv/config"
import "express-async-errors";
import { router } from "./routes";
import "../../container";
import "reflect-metadata";
import createConnection  from "../typeorm";

createConnection()
const app = express()

app.use(express.json())

app.use("/", router)

export {app}
