import axios from 'axios'

export default axios.create({
    baseURL:"http://localhost:3500"
})

//to start - npx json-server -p 3500 -w Data/db.json