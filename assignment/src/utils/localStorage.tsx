import { TypeUser } from "../types/user";

export const authenticated = (user: TypeUser, next: () => void ) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const isAuthenticate = () => {
    if(!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}