export interface TypeUser {
    id? : string,
    name: string,
    email: string,
    password: string,
    salt? : string,
    role? : {
        type: number,
        default: 0
    }
}