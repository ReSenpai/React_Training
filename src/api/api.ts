import axios from 'axios';
import { LoginDataType } from '../redux/auth_reducer';
import { PhotosType, ProfileType, UserType } from '../types/types';

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

export enum ResultCodesEnum {
    Success = 0,
    Error = 1  
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string       
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginResponseType = {
    data: {
        userId: number      
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}
type LogoutResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type GetCaptchaType = {
    url: string
}

export const authAPI = {
    authMe () {
        return instance.get<MeResponseType>(`auth/me`)
        .then(response => response.data);
    },
    login ({email, password, rememberMe = false, captcha = null}: LoginDataType) {
        return instance.post<LoginResponseType>('/auth/login', {
            email,
            password,
            rememberMe,
            captcha
        }).then(response => response.data)
    },
    logout () {
        return instance.delete<LogoutResponseType>('/auth/login')
        .then(response => response.data)
    },
    getCaptcha () {
        return instance.get<GetCaptchaType>('/security/get-captcha-url')
        .then(response => response.data.url)
    }
}
type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
type FollowType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type UnfollowType = FollowType;
export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 8) {
        return instance.get<GetUsersType>(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    },
    follow (userId: number) {
        return instance.post<FollowType>(`follow/${userId}`)
        .then(response => response.data);
    },
    unfollow (userId: number) {
        return instance.delete<UnfollowType>(`follow/${userId}`)
        .then(response => response.data);
    }
}
type GetUserProfileType = ProfileType;
type GetStatusType = string | null;
type UpdateStatusType = {
    data: {}
    messages: Array<string>
    resultCode: ResultCodesEnum
}
type SavePhotoType = {
    data: {
        photos: PhotosType
    }
    messages: Array<string>
    resultCode: ResultCodesEnum
}
type UpdateProfileType = {
    data: {}
    messages: Array<string>
    resultCode: ResultCodesEnum
}
export const profileAPI = {
    getUserProfile (userId: number | null) {
        return instance.get<GetUserProfileType>(`profile/${userId}`)
        .then(response => response.data);
    },
    authMe () {
        console.warn('In future updates, this method will be removed. Please use a similar method from "authAPI".');
        return authAPI.authMe();   
    },
    getStatus (userId: number) {
        return instance.get<GetStatusType>(`profile/status/${userId}`);
    },
    updateStatus(status: string | null) {
        return instance.put<UpdateStatusType>('profile/status', {
            status: status
        });
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<SavePhotoType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data);
    },
    updateProfile(profile: ProfileType) {
        return instance.put<UpdateProfileType>('profile', profile).then(response => response.data);
    }
}

export const headerAPI = {
    authMe () {
        console.warn('In future updates, this method will be removed. Please use a similar method from "authAPI".');
        return authAPI.authMe();  
    }
}

export const newsAPI = {
    search (name: string) {
        return jikan.get(`search/anime?q=${name}`)
        .then(response => response);
    }
}