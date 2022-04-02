import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'

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
                        <Menu />
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
                                        
                                    </tbody></table>
                                <p className="text-right cart-total"> 180$</p>
                                <p className="text-right">
                                    <a href="/cart" className="cart-btn1"> Cart</a>
                                    <a href="check out.html" className="cart-btn1"> Checkout</a>
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