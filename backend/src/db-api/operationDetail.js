'use strict'

/* Global Imports */
import Debug from 'debug'
import { OperationDetail } from '../models'

/* Config vars */
const debug = new Debug('nodejs-bunkeyApp-backend:db-api:operationDetail')

export default {

  create: async (objectOperationDetail) => {
    debug('Create OperationDetail')
    const operationDetail = new OperationDetail(objectOperationDetail)
    return operationDetail.save()
  },

  findById: async (_id) => {
    debug('FindById OperationDetail')
    const operationDetail = await OperationDetail.findOne({ _id })
    return operationDetail
  },

  findAll: async () => {
    debug('FindAll OperationDetail')
    const operationsDetail = await OperationDetail.find()
    return operationsDetail
  },

  update: async (_id, objectOperationDetail) => {
    debug('Update OperationDetail')
    const operationDetail = await OperationDetail.findByIdAndUpdate(_id, objectOperationDetail)
    return operationDetail
  },

  delete: async (_id) => {
    debug('Delete OperationDetail')
    const operationDetail = await OperationDetail.findOneAndDelete(_id)
    return operationDetail
  }

}
