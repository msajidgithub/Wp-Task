import axios from 'axios';

export const getUserData = async () => {
    const apiData = await axios.get(`http://localhost:8000/User`);
    console.log('API DATA', apiData)
    return apiData.data
}