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

const ProductEdit = async (props: ProductEditProps) => {
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
            Navigate('/products')
        } catch (error) {
            toastr.error("Update thất bại")
            Navigate('/products')
        }

    }
    return (
        <div className="w-180 p-3">
            <p className='text-center'>Form thêm products</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" {...register('name', { required: true })} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Price</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Price" {...register('price')} />
                </div>
                {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
                <button type="submit" className="btn text-primary border border-primary">Update</button>
            </form>

        </div>
    )
}

export default ProductEdit