import React from 'react'
import { TypeUser } from '../types/user'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


type SignupProps = {
  name: string,
  email: string,
  password: string,
  onAdd: (user: TypeUser) => void
}
type TypeForm = {
  name: string,
  email: string,
  password: string
}

const Signup = (props: SignupProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TypeForm>();
  const Navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeForm> = data => {
    console.log(data);
    props.onAdd(data);
    Navigate("/login");
  }
  return (
    <div>
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Tạo mới tài khoản!</h1>
                  </div>
                  <form className="user" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                      <div className="">
                        <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="Tên đăng nhập..." {...register('name')} />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email..." {...register('email', { required: true })} />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Mật khẩu..." {...register('password', { required: true })} />
                      </div>
                    </div>
                    <button className="btn btn-primary btn-user btn-block">
                      Đăng ký
                    </button>
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw" /> Đăng Ký với Google
                    </a>
                    <a href="/" className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-fw" /> Về trang chủ
                    </a>
                  </form>
                  <div className="text-center mt-4">
                    <a className="small-2" href="forgot-password.html">Quên mật khẩu?</a>
                  </div>
                  <div className="text-center mt-4">
                    <a className="small-2" href="/login">Bạn đã có tài khoản? Đăng nhập!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup