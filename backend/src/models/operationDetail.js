'use strict'

import moongose from 'mongoose'
const Schema = moongose.Schema

const OperationDetailSchema = new Schema({
  operation: { type: String, required: true },
  result: { type: Number, required: true }
})

export default moongose.model('OperationDetail', OperationDetailSchema, 'operation-detail')
