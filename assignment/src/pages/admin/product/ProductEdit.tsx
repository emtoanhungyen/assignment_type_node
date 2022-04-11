import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { getAllCategory } from '../../../api/category';
import { read } from '../../../api/product';
import { TypeCategory } from '../../../types/category';

type ProductEditProps = {
    name: String,
    price: Number,
    details: String,
    category: String,
    onUpdate: (product: EditForm) => void
}
type EditForm = {
    name: string,
    price: number,
    details: string,
    category: string
}

const ProductEdit = (props: ProductEditProps) => {
    const [category, setCategory] = useState<TypeCategory[]>([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<EditForm>();
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProducts();
    }, [])
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await getAllCategory();
            setCategory(data);
        }
        getCategory();
    }, []);
    const onSubmit: SubmitHandler<EditForm> = data => {
        try {
            props.onUpdate(data);
            toastr.success("Update thành công")
            Navigate('/admin/products')
        } catch (error) {
            toastr.error("Update thất bại")
            Navigate('/admin/products')
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input type="text" placeholder="Name" {...register('name', { required: true, minLength: 3, maxLength: 20 })} />
            </div>
            <div>
                <label>Price</label>
                <input type="number" placeholder="Price" {...register('price', { maxLength: 9 })} />
            </div>
            <div>
                <label>Detail</label>
                <input type="text" placeholder="Detail" {...register('details', { minLength: 5 })} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Category</label>
                <select className='category' {...register('category')}>
                    {category.map(item => {
                        return <option value={`${item._id}`}>{item.name}</option>
                    })}
                </select>
            </div>
            <button type="submit" >Update</button>
        </form>

    )
}

export default ProductEdit