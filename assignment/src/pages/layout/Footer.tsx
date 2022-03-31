import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <footer>
                {/* Footer */}
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h5> Who are We</h5>
                                <a href="#">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1645286901/Logo_rbcynk.png" />
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
                                    <a href="mailto:info@reen.com">toanpqph14805@gmail.com</a>
                                </p>
                                <p> <i className="fas fa-mobile-alt me-2" />
                                    <a href="tel:19005678">0123456789</a></p>
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
                            <div className="me-auto">Copyright by Pham Quoc Toan</div>
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

export default Footer