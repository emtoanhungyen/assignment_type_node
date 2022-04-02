import React from 'react'

type Props = {}

const Menu = (props: Props) => {
    return (
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
            <li><a href="#">Bài viết</a></li>
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
    )
}

export default Menu