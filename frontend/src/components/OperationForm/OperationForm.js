import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createOperationAction, fetchOperationsAction } from '../../actions/operationActions'
import './styles.css'

const OperationForm = () => {

  const dispatch = useDispatch()
  
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [operation, setOperation] = useState('multiply')

  const operationDetail = useSelector((state) => state.operation)
  const createOperation = (operationData, operation) => dispatch(createOperationAction(operationData, operation))
  const getOperations = () => dispatch(fetchOperationsAction())

  const operations = ['multiply', 'divide']


  /* Functions */

  const onChange =  (e) => {
    const value = e.target.value
    if (e.target.name === "num1") {
      setNum1(parseInt(value))
    } else if (e.target.name === "num2") {
      setNum2(parseInt(value))
    } else {
      setOperation(value)
    }
  }

  const onSubmit =  async (e) => {
    e.preventDefault()

    const requestOperation = {
      num1,
      num2
    }

    // Call Action
    await createOperation(requestOperation, operation)

    // Clean form
    setOperation('multiply')
    document.querySelector('form').reset()
  
  }

  const renderOperations = () => {
    return (
        operations.map(operation => <option key={operation} value={operation}>{operation.toUpperCase()}</option> )
    )
  }


  return (
    <div>
      <h1>Add Operation</h1>
      <form id="form" onSubmit={(e) => onSubmit(e)}>
        <div>
          <label>Number 1 </label><br/>
          <input type="number" required name="num1" onChange={(e) => onChange(e)}/>
        </div>
        <br/>
        <div>
          <label>Number 2: </label><br/>
          <input type="number" required name="num2" onChange={(e) => onChange(e)}/>
        </div>
        <br/>
        <div>
          <label>Operation: </label><br/>
          <select name="select" onChange={(e) => onChange(e)}>
            {renderOperations()}
          </select>
        </div>
        <br/>
        <button type="submit">Submit</button>
      </form>
      <span><h2>Result: <b>{ operationDetail ? operationDetail.result : null}</b></h2></span>
      
    </div>
  )
}

export default OperationForm



