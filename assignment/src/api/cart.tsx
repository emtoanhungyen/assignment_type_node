import { TypeCart } from "../types/cart"
import instance from "./instace"

export const read = (id:string | undefined) => {
    const url = `/cart/${id}`
    return instance.get(url)
}
export const listcart = () => {
    const url = `/cart`
    return instance.get(url)
}
export const addCard = (productCR:TypeCart) => {
    const url = `/cart`
    return instance.post(url, productCR)
}
export const deleteCart = (id: string) =>{
    const url = `/cart/${id}`
    return instance.delete(url)
}