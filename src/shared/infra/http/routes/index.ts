import { Router } from "express";

import "reflect-metadata"
import { personRouter } from "./person.routes";


const router = Router()

router.use("/person", personRouter)

export {router}