import { TypeCategory } from "../types/category";
import instance from "./instace";

export const postCategory = (category: TypeCategory) => {
    const url = "/categorys";
    return instance.post(url, category);
}

export const getAllCategory = () => {
    const url = "/categorys";
    return instance.get(url);
}

export const removeCategory = (id: string) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
}

export const updateCategory = (category: TypeCategory) => {
    const url = `/categorys/${category.id}`;
    return instance.put(url, category);
}