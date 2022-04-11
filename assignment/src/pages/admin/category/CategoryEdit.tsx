import React, { useEffect } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { read } from '../../../api/category';

type Props = {
  name: String,
  update: (category: InputForm ) => void

}
type InputForm = {
  name: string
}

const CategoryEdit = (props: Props) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<InputForm>();
  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
        const { data } = await read(id);
        reset(data);
    }
    getCategory();
}, [])
  const onSubmit: SubmitHandler<InputForm> = data => {
    try {
      props.update(data);
      toastr.success("Sửa danh mục thành công")
      Navigate('/admin/categorys');
    } catch (error) {
      toastr.error("Sửa sản phẩm không thành công");
      Navigate("/admin/categorys")
    }
  }
  return (
    <div>
      <div className="w-180 p-3">
      <p className='text-center'>Edit Category</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" placeholder="Name" {...register('name', { required: true })} />
        </div>
        <button type="submit" >Update</button>
      </form>
    </div>
    </div>
  )
}

export default CategoryEdit