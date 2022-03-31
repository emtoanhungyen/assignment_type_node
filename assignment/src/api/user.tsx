
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