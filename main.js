
const axios = require('axios')

const getContact = () => {

    try {
        const res = axios.get('https://randomuser.me/api/')
            .then(res => { console.log(res.data.results) })
    } catch (error) {
        console.log("ERROR", error)
    } finally {

    }


}

const getStarWarsPerson = (id) => {

    try {
        const res = axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => { console.log(res.data) })


    } catch (error) {
        console.log("ERROR", error)

    }

}

console.log(getStarWarsPerson(1));