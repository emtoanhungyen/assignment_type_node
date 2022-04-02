import React from 'react'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <div><div>
            {/* SHOW */}
            <div className="show2">
                <div className="container2  ">
                    <h1>Jacket</h1>
                </div>
            </div>
            {/*NEW*/}
            <div className="new">
                <div className="container">
                    {/*1*/}
                    <div className="row">
                        <div className="col-3 filter">
                            <h2>Filter</h2>
                            <h4>Category</h4>
                            <div className="lable1">
                                <label htmlFor="man"><input type="radio" id="man" name="pick" defaultChecked />Man</label><br />
                                <label htmlFor="woman"><input type="radio" id="woman" name="pick" />Woman</label><br />
                                <label htmlFor="tshirt"><input type="radio" id="tshirt" name="pick" />T-shirt</label><br />
                                <label htmlFor="jeans"><input type="radio" id="jeans" name="pick" />Jeans</label><br />
                                <label htmlFor="dess"><input type="radio" id="dress" name="pick" />Dress</label><br />
                                <label htmlFor="jacket"><input type="radio" id="jacket" name="pick" />Jacket</label> <br />
                                <label htmlFor="man"><input type="radio" id="man" name="pick" />Man</label><br />
                            </div>
                            <h4>Size</h4>
                            <select>
                                <option>M</option>
                                <option>L</option>
                                <option>S</option>
                                <option>X</option>
                                <option>XS</option>
                                <option>XL</option>
                                <option>XXL</option>
                                <option>3XL</option>
                            </select>
                            <h4>Color</h4>
                            <div className="d-flex">
                                <a href="#"><div className="color z1" /></a>
                                <a href="#"><div className="color z2" /></a>
                                <a href="#"><div className="color z3" /></a>
                                <a href="#"><div className="color z4" /></a>
                                <a href="#"><div className="color z5" /></a>
                                <a href="#"><div className="color z6" /></a>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 <span className="pro-sale">$30.00</span></div>
                                        <div className="pro-label">-30%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 <span className="pro-sale">$30.00</span></div>
                                        <div className="pro-label">-30%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 <span className="pro-sale">$30.00</span></div>
                                        <div className="pro-label">-30%</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 <span className="pro-sale">$30.00</span></div>
                                        <div className="pro-label">-30%</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 <span className="pro-sale">$30.00</span></div>
                                        <div className="pro-label">-30%</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00 <span className="pro-sale">$30.00</span></div>
                                        <div className="pro-label">-30%</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="pro-item">
                                        <div className="pro-thumb">
                                            <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880076/a_ossmvn.png" />
                                            <a href="#" className="btn btn-sm"> add to cart</a>
                                        </div>
                                        <span className="small">New</span>
                                        <h4 className="pro-item-name">
                                            <a href="#">Blue Bleach Wash Denim Western Short</a>
                                        </h4>
                                        <div className="pro-item-price">$20.00</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <ul className="d-flex stt">
                                    <li><a href="#" className="clas1 ">1</a></li>
                                    <li><a href="#" className="clas1">2</a></li>
                                    <li><a href="#" className="clas1">3</a></li>
                                    <li><a href="#" className="clas1">4</a></li>
                                    <li><a href="#" className="clas1">5</a></li>
                                    <li><a href="#" className="clas1">6</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductsList