import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

const LayoutAdmin = (props: Props) => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="d-flex">
                        {/* LOGO */}
                        <div className="logo">
                            <a href="/">
                                <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648878761/logo_b36lmk.png" />
                            </a>
                        </div>
                        {/* MENU */}
                        <ul className="menu">
                            <li>
                                <Link to='/admin' >Dashboard</Link>
                            </li>
                            <li>
                                <a href="/admin/products">Products </a>
                                <ul className="child">
                                    <li><a href="/admin/products/add">Add</a></li>
                                    <li><a href="/admin/products">List</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* CART*/}
                        <div className="cart-box">
                            <a className="cart-btn" href="#">
                                $20.00 <i className="fas fa-shopping-cart" />
                                <span>2</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default LayoutAdmin