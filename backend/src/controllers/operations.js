'use strict'

import { dbOperationDetail } from '../db-api'
import { Error, Success } from '../util'

const multiply = async (req, res) => {
  try {
    const { num1, num2 } = req.body

    if (num1 === undefined || num2 === undefined) return Error({ message: 'You must send two numbers', status: 400 }, res)

    const result = num1 * num2
    const operationDetail = await saveOperationDetail(num1, num2, '*', result)

    Success(res, { data: operationDetail, model: 'multiply' }, 201)
  } catch (error) {
    Error(error, res)
  }
}

const divide = async (req, res) => {
  try {
    const { num1, num2 } = req.body

    if (num1 === undefined || num2 === undefined) return Error({ message: 'You must send two numbers', status: 400 }, res)

    if (num2 === 0) return Error({ message: 'num2 cannot be 0', status: 400 }, res)

    const result = num1 / num2
    const operationDetail = await saveOperationDetail(num1, num2, '/', result)
    Success(res, { data: operationDetail, model: 'divide' }, 201)
  } catch (error) {
    Error(error, res)
  }
}

const getOperationsDetail = async (req, res) => {
  try {
    const operationsDetail = await dbOperationDetail.findAll()
    if (!operationsDetail) return Error({ message: 'Operations not found', status: 404 }, res)
    Success(res, { data: operationsDetail, model: 'operations' })
  } catch (error) {
    Error(error, res)
  }
}

const saveOperationDetail = async (x, y, operation, result) => {
  try {
    const objectOperationDetail = {
      operation: `${x} ${operation} ${y}`,
      result
    }
    const operationDetail = await dbOperationDetail.create(objectOperationDetail)
    return operationDetail
  } catch (error) {
    console.log(error)
  }
}

export default {
  multiply,
  divide,
  getOperationsDetail
}
