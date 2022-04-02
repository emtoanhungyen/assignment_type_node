import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <div className=" footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <a href="#">
                                <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648878761/logo2_vyqotb.png" className="f-logo" />
                            </a>
                            <p className=''><a href="#">reyfashion@gmail.com</a><br />
                                <a href="#">18006868</a><br />
                                <a href="#">FLC Twin Tower 265 Cau Giay, Hanoi </a> <br />
                            </p>
                        </div>
                        <div className="col-2">
                            <h5> Shop</h5>
                            <ul>
                                <li><a href="#"> Tshirts</a></li>
                                <li><a href="#"> Jacket</a></li>
                                <li><a href="#"> Pants</a></li>
                                <li><a href="#"> Jeans</a></li>
                                <li><a href="#"> Accessories </a></li>
                                <li><a href="#"> Shose </a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5> Customer</h5>
                            <ul>
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#"> Order Status</a></li>
                                <li><a href="#"> Returns</a></li>
                                <li><a href="#"> Payment Options</a></li>
                                <li><a href="#">Contact Us </a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h5> News Letter</h5>
                            <p className="social">
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-instagram" /></a>
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fab fa-pinterest-p" /></a>
                            </p>
                        </div>
                    </div>
                    <div className="footer-copy">
                        Phạm Quốc Toản
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer