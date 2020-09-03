import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '563423ff-f4e5-47b1-9144-287d41917178'
    }
});

const jikan = axios.create({
    baseURL: 'https://api.jikan.moe/v3/'
})

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
    login (email, password, rememberMe = false, captcha = null) {
        return instance.post('/auth/login', {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logout () {
        return instance.delete('/auth/login')
        .then(response => response.data)
    },
    getCaptcha () {
        return instance.get('/security/get-captcha-url')
        .then(response => response.data.url)
    }
}

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
        .then(response => response.data );
    },
    authMe () {
        console.warn('In future updates, this method will be removed. Please use a similar method from "authAPI".');
        return authAPI.authMe();   
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put('profile/status', {
            status: status
        });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    updateProfile(profile) {
        return instance.put('profile', profile).then(response => response.data);
    }
}

export const headerAPI = {
    authMe () {
        console.warn('In future updates, this method will be removed. Please use a similar method from "authAPI".');
        return authAPI.authMe();  
    }
}

export const newsAPI = {
    search (name) {
        return jikan.get(`search/anime?q=${name}`)
        .then(response => response.data);
    }
}
