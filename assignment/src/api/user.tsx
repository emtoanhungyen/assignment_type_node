
import { TypeUser } from "../types/user";
import instance from "./instace";


export const dangky = (user: TypeUser) => {
    const url = "/signup";
    return instance.post(url,user);
}
export const login = (user: TypeUser) => {
    const url = "/signin";
    return instance.post(url, user);
}
export const get = (id: string| undefined) => {
    const url = `/users/${id}`;
    return instance.get(url);
}
export const getAll = () => {
    const url = `/users`;
    return instance.get(url);
}
export const removeuser = (id: string) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}