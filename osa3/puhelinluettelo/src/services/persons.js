import axios from 'axios'
const baseUrl = '/api/persons'

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

const deleteP = id => {
    axios.delete(`${baseUrl}/${id}`)
    console.log(`deleted person with id: ${id}`)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    console.log(`updated number for person with id: ${id}`)
    return request
}

const persons = {
    getAll: getAll,
    create: create,
    update: update,
    deleteP: deleteP
}

export default persons