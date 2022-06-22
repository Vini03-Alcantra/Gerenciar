import { Router } from "express";

import "reflect-metadata"
import { accountRouter } from "./account_constant.routes";
import { accountVariableRouter } from "./account_variables.routes";
import { authenticatePersonRoute } from "./authenticate.routes";
import { personRouter } from "./person.routes";
import { rendaConstantRouter } from "./renda_constant.routes";
import { rendaVariableRouter } from "./renda_variable.routes";
import {ensureAuthenticated} from "../../../../midlewares/ensure-authenticated"

const router = Router()

router.use("/person", personRouter)
router.use("/accountConstant", ensureAuthenticated, accountRouter)
router.use("/accountVariable", ensureAuthenticated, accountVariableRouter)
router.use("/rendaConstant", ensureAuthenticated, rendaConstantRouter)
router.use("/rendaVariable", ensureAuthenticated, rendaVariableRouter)

router.use(authenticatePersonRoute)

export {router}