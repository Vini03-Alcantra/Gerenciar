import { Router } from "express";

import "reflect-metadata"
import { accountRouter } from "./account_constant.routes";
import { accountVariableRouter } from "./account_variables.routes";
import { personRouter } from "./person.routes";


const router = Router()

router.use("/person", personRouter)
router.use("/accountConstant", accountRouter)
router.use("/accountVariable", accountVariableRouter)


export {router}