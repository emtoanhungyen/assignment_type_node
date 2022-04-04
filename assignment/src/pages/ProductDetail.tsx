import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
    return (
        <div>
            {/* MENU DETAIL */}
            <div className="menu-detail">
                <div className="container">
                    <div className="d-flex">
                        <ul className="menu-detail-box">
                            <li><a href="/" className="active active-home">Home</a></li>
                            <li><a href="#" className="active">Man</a></li>
                            <li><a href="#">Puma Downtown Graphic Tee</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* PRODUCT */}
            <div className="productdetail">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <div className="productdetail-box">
                                <a href="#">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648885945/1a_fn7mp7.png" />
                                </a>
                            </div>
                            <div className="productdetail-box">
                                <a href="#">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648885945/1a_fn7mp7.png" />
                                </a>
                            </div>
                            <a href="#">
                                <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648885945/1a_fn7mp7.png" />
                            </a>
                        </div>
                        <div className="col-6">
                            <a href="#">
                                <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648886077/t4_zi7isu.png" />
                            </a>
                        </div>
                        <div className="col-4">
                            <h3>Puma Downtown Graphic Tee</h3>
                            <div className="product-code">
                                <p>SKU: SP00001</p>
                            </div>
                            <div className="sale">
                                <span className="pro-sale">$40.00</span>
                                <div className="product-item-price">$30.00</div>
                            </div>
                            <h4>SIZE</h4>
                            <p className="form-size">
                                <select>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>S</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                            </p>
                            <div className="guide">
                                <p>Size guide</p>
                            </div>
                            <h4>COLOR</h4>
                            <div className="d-flex">
                                <a href="#"><div className="color z1" /></a>
                                <a href="#"><div className="color z2" /></a>
                                <a href="#"><div className="color z3" /></a>
                                <a href="#"><div className="color z4" /></a>
                                <a href="#"><div className="color z5" /></a>
                                <a href="#"><div className="color z6" /></a>
                            </div>
                            <p>
                            </p><h4>QTY*</h4>
                            <input className="qty" id="inputQty" type="number" min={0} max={10} defaultValue={2} />
                            <p />
                            <div className="d-flex">
                                <div className="addto">
                                    <a href="#" className="btn btn-dark"> ADD TO CART</a>
                                </div>
                                <div className="addto">
                                    <a href="#" className="btn btn-dark">BUY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* DETAIL */}
            <div className="detail">
                <div className="container">
                    <h4>DETAILS</h4>
                    <p>Graphic-topped tee by Puma crafted from 100% cotton. Short sleeve t-shirt finished with a rib-knit crew neck.</p>
                    <div>
                        <ul className="care">
                            <li>Content + Care</li>
                            <li>- 100% Cotton</li>
                            <li>- Machine Wash</li>
                            <li>- Imported</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="care">
                            <li>Size + Fit</li>
                            <li>- Measurements taken from size Medium</li>
                            <li>- Chest: 22"</li>
                            <li>- Length: 27.5"</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* SIZE GUIDE */}
            <div className="size-guide">
                <div className="container">
                    <h3>Size Guide</h3>
                    <table className="timetable">
                        <tbody><tr>
                            <th />
                            <th>XS</th>
                            <th>S</th>
                            <th>M</th>
                            <th>L</th>
                            <th>XL</th>
                            <th>XXL</th>
                        </tr>
                            <tr>
                                <td>Chest</td>
                                <td>34 - 36</td>
                                <td>36 - 38</td>
                                <td>38 - 40</td>
                                <td>40 - 43</td>
                                <td>43 - 46</td>
                                <td>46 - 49</td>
                            </tr>
                            <tr>
                                <td>Sleeve Length</td>
                                <td>31 - 31.75</td>
                                <td>31.75 - 32.5</td>
                                <td>32.5 - 33.5</td>
                                <td>33.5 - 34.5</td>
                                <td>34.5 - 35.5</td>
                                <td>35.5 - 36.5</td>
                            </tr>
                            <tr>
                                <td>Natural Waist</td>
                                <td>27.5 - 29.5</td>
                                <td>29.5 - 31.5</td>
                                <td>31.5 - 33.5</td>
                                <td>33.5 - 36.5</td>
                                <td>36.5 - 39.5</td>
                                <td>39.5 - 42.5</td>
                            </tr>
                            <tr>
                                <td>Hips</td>
                                <td>33.5 - 35.5</td>
                                <td>35.5 - 37.5</td>
                                <td>37.5 - 39.5</td>
                                <td>39.5 - 42.5</td>
                                <td>42.5 - 45.5</td>
                                <td>45.5 - 48.5</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
            {/* RELATED PRODUCT */}
            <div className="related-product">
                <div className="container">
                    <h2>Related products</h2>
                    <div className="product-grid">
                        <div className="row">
                            <div className="col-3">
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
                            <div className="col-3">
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
                            <div className="col-3">
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
                            <div className="col-3">
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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail