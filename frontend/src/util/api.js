import axios from "axios"

const generateHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json"
    }
  }
}

export default class API {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL
  }

  get(endPoint) {
    return axios.get(`${this.baseUrl}/${endPoint}`, generateHeaders())
  }

  post(endPoint, body) {
    return axios.post(`${this.baseUrl}/${endPoint}`, body, generateHeaders())
  }

  put(endPoint, body) {
    return axios.put(`${this.baseUrl}/${endPoint}`, body, generateHeaders())
  }

  patch(endPoint, body) {
    return axios.patch(`${this.baseUrl}/${endPoint}`, body, generateHeaders())
  }

  delete(endPoint) {
    return axios.delete(`${this.baseUrl}/${endPoint}`, generateHeaders())
  }
}
