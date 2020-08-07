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
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data.resultCode);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data.resultCode);
    }
}

export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`)
        .then(response => response.data )
    },
    authUser () {
        return instance.get(`auth/me`)
        .then(response => response.data)
    }
}

export const headerAPI = {
    authUser () {
        return instance.get(`auth/me`)
        .then(response => response.data)
    }
}
