import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bb5e3964-8141-450d-ba2a-43af96a593aa'
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 8) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}
