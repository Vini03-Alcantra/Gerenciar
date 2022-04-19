import { Router } from "express";

import "reflect-metadata"
import { accountRouter } from "./account_constant.routes";
import { accountVariableRouter } from "./account_variables.routes";
import { authenticatePersonRoute } from "./authenticate.routes";
import { personRouter } from "./person.routes";
import { rendaConstantRouter } from "./renda_constant.routes";
import { rendaVariableRouter } from "./renda_variable.routes";


const router = Router()

router.use("/person", personRouter)
router.use("/accountConstant", accountRouter)
router.use("/accountVariable", accountVariableRouter)
router.use("/rendaConstant", rendaConstantRouter)
router.use("/rendaVariable", rendaVariableRouter)

// router.use(authenticatePersonRoute)

export {router}