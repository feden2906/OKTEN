import axios from 'axios';

let baseUrl = {baseURL: 'https://api.sampleapis.com/futurama'};

let axiosInstance = axios.create(baseUrl);

const getCharacters = () => axiosInstance('/characters');
const getInventory = () => axiosInstance('/inventory');



export {getCharacters, getInventory};