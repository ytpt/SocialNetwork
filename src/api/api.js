import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd896009f-7ba4-44d0-86e4-59d170f5d047'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
        });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`) 
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
// /*Дописала */.then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
// /*Дописала */.then(response => response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
// /*Дописала */.then(response => response.data)
    },

    savephoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
/*Дописала .then(response => response.data)*/
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}


