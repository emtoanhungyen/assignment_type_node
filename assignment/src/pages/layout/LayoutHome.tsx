import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


type Props = {}

const LayoutHome = (props: Props) => {
  return (
    <div>
      {/* header trang web */}
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="d-flex">
              <div className="topbar-email me-3">
                <i className="far fa-envelope me-2" />
                <a href="mailto:info@reen.com">toanpqph14805@gmail.com</a>
              </div>
              <div className="topbar-phone me-auto">
                <i className="fas fa-mobile-alt me-2" />
                <a href="tel:19005678">0123456789</a>
              </div>
              <div className="topbar-social">
                <a href="#" target="_Blank"><i className="fab fa-facebook-f me-3" /></a>
                <a href="#"><i className="fab fa-google me-3" /></a>
                <a href="#"><i className="fab fa-pinterest me-3" /></a>
                <a href="#"><i className="fab fa-behance me-3" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation ( thanh menu) */}
        <div>
          <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
                <a className="logo" href="#">
                  <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1645286901/Logo_rbcynk.png" />
                </a>
                {/* MOBILE BUTTON */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                  {/* MENU */}
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    {/* FORM */}
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Trang chủ</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/news">Bài Viết</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/products">Sản phẩm</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </li>
                    <div className="dropdown">
                      <a href="#" data-bs-toggle="dropdown" className="nav-link">
                        <i className="fas fa-search" /></a>
                      <div className="dropdown-menu menu p-3">
                        <p><input type="text" className="form-control" placeholder="Search..." /></p>
                        <button className="btn btn-outline-success"> Search</button>
                      </div>
                    </div>
                  </ul></div>
                <button className="btn btn-outline-success" type="submit">Contact Us</button>
              </div>
            </nav></div>

        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        {/* Footer */}
        <div className="Footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5> Who are We</h5>
                <a href="#">
                  <img src="img/FLOGO.png" />
                </a>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p> <a href="#"> More About Us <i className="fas fa-arrow-right" /></a></p>
              </div>
              <div className="col-md-2">
                <h5>USEFUL LINKS</h5>
                <p><a href="#">FAQ</a></p>
                <p><a href="#">Terms and Condition</a></p>
                <p><a href="#">Privacy Policy</a></p>
                <p><a href="#">Sitemap</a></p>
                <p><a href="#">Contact Us</a></p>
              </div>
              <div className="col-md-3">
                <h5>Get in touch</h5>
                <p> Doloreiur quia commolu ptatemp dolupta oreprerum tibusam eumenis et consent accullignis dentibea autem inisita.</p>
                <p>
                  <a href="#"><i className="fas fa-map-marker-alt me-2" /> 84 Street, City, State 24813</a></p>
                <p>
                  <i className="far fa-envelope me-2" />
                  <a href="mailto:info@reen.com">info@reen.com</a>
                </p>
                <p> <i className="fas fa-mobile-alt me-2" />
                  <a href="tel:19005678">1900 5678</a></p>
              </div>
              <div className="col-md-4"><h5>Newsletter</h5>
                <p>Conecus iure posae volor remped modis aut lor volor accabora incim resto explabo.
                </p>
                <div className="search">
                  <div className="row">
                    <input type="text" placeholder="Enter Your Email" className="form-control" />
                    <button className="btn btn-outline-success" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* COPYRIGHT */}
        <div className="copyright">
          <div className="container">
            <div className="d-flex">
              <div className="me-auto">Giao diện được đi copy tại REEN</div>
              <ul className="list-unstyled mb-0 d-flex">
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About Us</a></li>
                <li> <a href="#">Porfolio</a></li>
                <li> <a href="#">Shop</a></li>
                <li> <a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
    </div>

  )
}

export default LayoutHome