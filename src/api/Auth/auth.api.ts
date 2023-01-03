import http from "../http";

export const login = (user: any) => http.post('/auth/login', user)
