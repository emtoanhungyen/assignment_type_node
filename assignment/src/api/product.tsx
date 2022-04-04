import { TypeProduct } from "../types/products";
import instance from "./instace";


export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const remove = (id: string) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (product: TypeProduct) => {
    const url = "/products";
    return instance.post(url, product);
}
export const update = (product: TypeProduct) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}