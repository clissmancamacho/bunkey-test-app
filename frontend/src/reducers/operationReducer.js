import { FETCH_OPERATIONS, NEW_OPERATION, ADD_OPERATION_TO_LIST } from '../actions/types'

const initialState = {
  operations: [],
  operation: {}
}

const operationReducer =  (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_OPERATIONS:
      return {
        ...state,
        operations: payload
      }
    case NEW_OPERATION:
      return {
        ...state,
        operation: payload
      }
    case ADD_OPERATION_TO_LIST:
      return {
        ...state,
        operations: [payload, ...state.operations]
      }
    default:
      return state
  }
}

export default operationReducer