import API from "../util/api";

const api = new API()

export default {

  getOperations: () => {
    return new Promise((resolve, reject) => {
      api.get('/operationsDetail')
      .then(res => resolve(res.data))
      .catch(error => reject(error))
    })
  },

  createOperation: (operation, endpoint) => {
    return new Promise((resolve, reject) => {
      api.post(endpoint, operation)
      .then(res => resolve(res.data))
      .catch(error => reject(error))
    })
  }

}