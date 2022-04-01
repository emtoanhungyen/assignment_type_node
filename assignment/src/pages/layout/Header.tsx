import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header className="position-fixed w-100 z-auto">
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
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <a className="logo" href="/">
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
                                        <div className="dropdown">
                                            <a href="#" data-bs-toggle="dropdown" className="nav-link">
                                                <i className="fas fa-search" /></a>
                                            <div className="dropdown-menu menu p-3">
                                                <p><input type="text" className="form-control" placeholder="Search..." /></p>
                                                <button className="btn btn-outline-success"> Search</button>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                
                                <button className="btn btn-outline-success" type="submit">
                                    <NavLink to='/login'>Đăng nhập</NavLink>
                                </button>
                            </div>
                        </nav></div>

                </div>
            </header>
        </div>
    )
}

export default Header