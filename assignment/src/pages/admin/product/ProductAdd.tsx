import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
type ProductAddProps = {
  name: String,
  price: Number,
  onAdd: (product: InputForm) => void
}
type InputForm = {
  name: string,
  price: number
}

const ProductAdd = (props: ProductAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InputForm>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<InputForm> = data => {
    props.onAdd(data);
    navigate("/admin/products");
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
        <button type="submit" className="btn text-primary border border-primary">Add</button>
      </form>

    </div>
  )
}

export default ProductAdd