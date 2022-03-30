
import { TypeUser } from "../types/user";
import instance from "./instace";


export const signup = (user: TypeUser) => {
    const url = "/user";
    return instance.post(url,user);
}
