import React from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

type CategoryAddProps = {
  name: String,
  onAdd: (category: InputForm ) => void

}
type InputForm = {
  name: string
}

const CategoryAdd = (props: CategoryAddProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<InputForm>();
  const Navigate = useNavigate();
  const onSubmit: SubmitHandler<InputForm> = data => {
    try {
      props.onAdd(data);
      toastr.success("Thêm danh mục thành công")
      Navigate('/admin/categorys');
    } catch (error) {
      toastr.error("Thêm sản phẩm không thành công");
      Navigate("/admin/categorys")
    }
  }
  return (
    <div>
      <div className="w-180 p-3">
      <p className='text-center'>Form thêm Category</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" {...register('name', { required: true })} />
        </div>
        <button type="submit" className="btn text-primary border border-primary">Add</button>
      </form>
    </div>
    </div>
  )
}

export default CategoryAdd