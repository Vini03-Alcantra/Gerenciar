import { AuthenticatePersonController } from "@modules/person/useCases/authenticatePerson/AuthenticatePersonController";

import { Router } from "express";

const authenticatePersonController = new AuthenticatePersonController()

const authenticatePersonRoute = Router()

authenticatePersonRoute.post("/sessions", authenticatePersonController.handle)

export {authenticatePersonRoute}