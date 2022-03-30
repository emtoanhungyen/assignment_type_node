import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <body className="">
      <div className="container">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-20">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Chào mừng bạn!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Nhập email..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Mật khẩu..." />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Nhớ tài khoản?</label>
                          </div>
                        </div>
                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                          Đăng nhập
                        </a>
                        <a href="index.html" className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw" /> Đăng nhập với Google
                        </a>
                        <a href="/" className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-fw" /> Về trang chủ
                        </a>
                      </form>
                      <div className="text-center mt-4">
                        <a className="small-2" href="forgot-password.html">Quên mật khẩu?</a>
                      </div>
                      <div className="text-center mt-3">
                        <a className="small-2" href="register.html">Tạo mới một tài khoản!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </body>
  )
}

export default Login