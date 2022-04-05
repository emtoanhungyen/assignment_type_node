import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '../api/user';
import { authenticated } from '../utils/localStorage';
import { Link, useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
type InputForm = {
  email: string,
  password: string
}
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<InputForm>();
  const Navigate = useNavigate();
  
  const onSubmit: SubmitHandler<InputForm> = async (data: any) => {
    try {
      const { data: user } = await login(data);
      console.log(user.name);
      
      authenticated(user, () => {

        Navigate("/");
      })
      toastr.success("Đăng nhập thành công!")
    } catch (error) {
      toastr.error("Đăng nhập không thành công!");
      Navigate("/login")
    }
  }
  return (
    <div className='dangky'>
      <div className="form-tt">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" name="dang-ky">
          <input type="email" placeholder="Email..." {...register('email', {required: true})}/>
          <input type="password" placeholder="Password..." {...register('password', {required: true})} />
          <input type="checkbox" id="checkbox" name="checkbox" /><label className="checkbox-text">Nhớ đăng nhập lần sau</label>
          <input type="submit" name="submit" defaultValue="Đăng nhập" />
          <label className="psw-text">Quên mật khẩu</label>
          <br />
          <label className="psw-text"><Link to='/signup'>Bạn chưa có tài khoản?</Link></label>
          <br />
          <label className="psw-text"><Link to='/'> Về trang chủ</Link></label>
        </form>
      </div>
    </div>
  )
}

export default Login