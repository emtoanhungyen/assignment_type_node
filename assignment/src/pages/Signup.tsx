import React from 'react'
import { TypeUser } from '../types/user'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

type SignupProps = {
  name: string,
  email: string,
  password: string,
  onAdd: (user: TypeUser) => void
}
type TypeForm = {
  name: string,
  email: string,
  password: string,
}

const Signup = (props: SignupProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeForm>();
  const Navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeForm> = data => {
    try {
      props.onAdd(data);
      toastr.success("Đăng ký tài khoản thành công");
      toastr.success("Mời bạn đăng nhập")
      Navigate("/login");
    } catch (error) {
      toastr.error("Đăng ký không thành công")
      Navigate("/signup")
    }

  }
  return (
    <div className='dangky'>
      <div className="form-tt">
        <h2>Đăng ký</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" name="dang-ky">
          <input type="text" placeholder="Name..." {...register('name', {required: true})}/>
          <input type="email" placeholder="Email..." {...register('email', {required: true})}/>
          <input type="password" placeholder="Password..." {...register('password', {required: true})} />
          <input type="submit" name="submit" defaultValue="Đăng ký" />
          <label className="psw-text">Quên mật khẩu</label>
          <br/>
          <label className="psw-text"><Link to='/login'>Bạn đã có tài khoản?</Link></label>
          <br />
          <label className="psw-text"><Link to='/'> Về trang chủ</Link></label>
        </form>
      </div>
    </div>


  )
}

export default Signup