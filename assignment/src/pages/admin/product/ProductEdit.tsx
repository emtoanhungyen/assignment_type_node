import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { read } from '../../../api/product';

type ProductEditProps = {
    name: String,
    price: Number,
    onUpdate: (product: EditForm) => void
}
type EditForm = {
    name: string,
    price: number
}

const ProductEdit =  (props: ProductEditProps) => {
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
                <input type="number" placeholder="Price" {...register('price', {required: true, maxLength: 9})} />
            </div>
            <button type="submit" >Update</button>
        </form>

    )
}

export default ProductEdit