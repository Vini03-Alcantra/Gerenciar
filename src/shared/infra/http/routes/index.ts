import { Router } from "express";

import "reflect-metadata"
import { accountRouter } from "./account_constant.routes";
import { personRouter } from "./person.routes";


const router = Router()

router.use("/person", personRouter)
router.use("/accountConstant", accountRouter)

export {router}