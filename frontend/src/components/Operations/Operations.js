import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchOperationsAction, addOperationToListAction } from '../../actions/operationActions'
import './styles.css'


const Operations = () => {

  const dispatch = useDispatch()
  const operations = useSelector((state) => state.operations)
  const operation = useSelector((state) => state.operation)
  const fetchOperations = () => dispatch(fetchOperationsAction())
  const addOperationToList = (operation) => dispatch(addOperationToListAction(operation))

  useEffect(() => {
    fetchOperations()
  }, [])

  useEffect(() => {
    if(Object.keys(operation).length > 0) addOperationToList(operation)
  }, [operation])

  return (
    <div>
      <h1>Operations History</h1>
      {operations.map(operation => (
        <div key={operation._id}>
          <h3>Operation Id: <b>{operation._id}</b></h3>
          <h4>Operation Detail: <b>{operation.operation}</b></h4>
          <p>Result: <b>{operation.result}</b></p>
          <hr/>
        </div>
      ))}
      </div>
      )
    }
    
    export default Operations