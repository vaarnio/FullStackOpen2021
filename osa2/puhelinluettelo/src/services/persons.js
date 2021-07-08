import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => 
        response.data
    )
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request
}

const update = (id, newObject) => {
    console.log("update")
}

export default {
    getAll: getAll,
    create: create,
    update: update
}