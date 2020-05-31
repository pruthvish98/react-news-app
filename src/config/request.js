import axios from "axios";

axios.defaults.baseURL = 'http://newsapi.org';
let apiKey = 'f1d5ddb3d4894050968ba28b3e0918df';


const get = (endPoint) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`/v2/${endPoint}&apikey=${apiKey}`)
            .then(response => {
                if (response.status === 200) resolve(response["data"]);
            })
            .catch(err => {
                reject(err)
                console.log("err", err)
            })
    });
}

export {
    get as
    default
};