import express from 'express'
import { OperationsCtrl } from '../controllers'

/* Variables de configuracion */
// guard()
const api = express.Router()
/** **** END POINTS DE OPERACIONES *****/
api.post('/multiplicar', OperationsCtrl.multiply)
api.post('/dividir', OperationsCtrl.divide)
api.get('/operationsDetail', OperationsCtrl.getOperationsDetail)

export default api
