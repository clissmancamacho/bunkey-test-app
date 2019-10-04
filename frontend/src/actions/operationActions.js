import { FETCH_OPERATIONS, NEW_OPERATION, ADD_OPERATION_TO_LIST } from './types'
import { operationSevice } from '../services/'

export const fetchOperationsAction = () => async (dispatch) => {
  try {
    const response = await operationSevice.getOperations()
    dispatch({
      type: FETCH_OPERATIONS,
      payload: response.operations
    })
  } catch (error) {
    console.log(error)
  }
  
}

export const createOperationAction = (operationData, operation) => async (dispatch) => {
  const endpoint = operation === 'multiply' ? 'multiplicar' : 'dividir'
  try {
    const response = await operationSevice.createOperation(operationData, endpoint)  
    dispatch({
      type: NEW_OPERATION,
      payload: response[operation]
    })
  } catch (error) {
    alert("You cannot divide by 0")
  }
}

export const addOperationToListAction = (operation) => dispatch => {
  if (operation) {
    dispatch({
      type: ADD_OPERATION_TO_LIST,
      payload: operation
    })
  }
}
    