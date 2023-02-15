import {logger} from "../../../logger"
import {app} from "./app"

const PORT = process.env.PORT || 3009;



app.listen(PORT, () => {logger.info(`Rodando na porta ${PORT}`)})
