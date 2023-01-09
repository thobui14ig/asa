import http from "../http"


const refresh = localStorage.getItem('refreshToken')
export const login = (user: any) => http.post('/auth/login', user)

export const refreshToken = () => http.post('/auth/refresh', {
    refreshToken: refresh
})
