import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-redux-main-8fece-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance