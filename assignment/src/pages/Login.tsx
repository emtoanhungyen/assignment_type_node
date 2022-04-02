import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '../api/user';
import { authenticated } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        
      </div>
      <footer>
        <p>
          Copyright by Pham Quoc Toan
        </p>
      </footer>
    </div>

  )
}

export default Login