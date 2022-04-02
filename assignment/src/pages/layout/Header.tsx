import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
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
                            <li><a href="/">Trang chủ</a></li>
                            <li>
                                <a href="/products">Sản phẩm</a>
                            </li>
                            <li>
                                <a href="/category">Danh mục sản phẩm <i className="fas fa-angle-down" /> </a>
                                <ul className="child">
                                    <li><a href="#"> Menu 1 <i className="fas fa-angle-right" /> </a>
                                        <ul className="child2">
                                            <li><a href="#">Menu</a></li>
                                            <li><a href="#">Menu 2</a></li>
                                            <li><a href="#">Menu 3</a></li>
                                            <li><a href="#">Menu 4</a></li>
                                            <li><a href="#">Menu 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"> Menu 2  <i className="fas fa-angle-right" /> </a>
                                        <ul className="child2">
                                            <li><a href="#">Menu</a></li>
                                            <li><a href="#">Menu 2</a></li>
                                            <li><a href="#">Menu 3</a></li>
                                            <li><a href="#">Menu 4</a></li>
                                            <li><a href="#">Menu 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Menu 3</a></li>
                                    <li><a href="#">Menu 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Sales</a></li>
                            <li>
                                <a href="#">Tài khoản <i className="fas fa-angle-down" /> </a>
                                <ul className="child">
                                    <li><a href="/signup"> Đăng ký <i className="fas fa-angle-right" /> </a>
                                    </li>
                                    <li><a href="/login"> Đăng nhập  <i className="fas fa-angle-right" /> </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* CART*/}
                        <div className="cart-box">
                            <a className="cart-btn" href="#">
                                $20.00 <i className="fas fa-shopping-cart" />
                                <span>2</span>
                            </a>
                            <div className="cart-dropdown">
                                <table>
                                    <tbody><tr>
                                        <td width={30}>
                                            <a href="#"><i className="fas fa-times-circle" /></a>
                                        </td>
                                        <td><a href="#"><img src="img/a.png" /> </a></td>
                                        <td>
                                            <p>
                                                <a href="#"><b> Men's quality green shorts</b></a>
                                            </p>
                                            <div> 20$</div>
                                            <div> <input type="number" defaultValue={1} /></div>
                                        </td><td width={80}> 20$</td>
                                    </tr>
                                        <tr>
                                            <td width={30}>
                                                <a href="#"><i className="fas fa-times-circle" /></a>
                                            </td>
                                            <td width={50}><a href="#"><img src="img/b.png" /> </a></td>
                                            <td>
                                                <p>
                                                    <a href="#"><b> Men's quality green shorts</b></a>
                                                </p>
                                                <div> 20$</div>
                                                <div> <input type="number" defaultValue={1} /></div>
                                            </td><td width={80}> 20$</td>
                                        </tr>
                                        <tr>
                                            <td width={30}>
                                                <a href="#"><i className="fas fa-times-circle" /></a>
                                            </td>
                                            <td width={50}><a href="#"><img src="img/c.png" /> </a></td>
                                            <td>
                                                <p>
                                                    <a href="#"><b> Men's quality green shorts</b></a>
                                                </p>
                                                <div> 20$</div>
                                                <div> <input type="number" defaultValue={1} /></div>
                                            </td><td width={80}> 20$</td>
                                        </tr>
                                    </tbody></table>
                                <p className="text-right cart-total"> 180$</p>
                                <p className="text-right">
                                    <a href="cart.html" className="cart-btn1"> view cart</a>
                                    <a href="check out.html" className="cart-btn1"> proces to checkout</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Header