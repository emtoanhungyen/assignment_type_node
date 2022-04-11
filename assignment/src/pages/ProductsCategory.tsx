import React from 'react'
import { TypeCategory } from '../types/category'

type Props = {
    category: TypeCategory[]
}

const ProductsCategory = (props: Props) => {
    return (
        <div>
            {/* SHOW */}
            <div className="show1">
                <div className="container1  ">
                    <h1>Wellcome to Reystore</h1>
                </div>
            </div>
            {/*CATE*/}
            <div className="cate">
                <div className="container">
                    <div className="row">
                        {props.category.map((item, index) => {
                            return <div className="col-category">
                                <div key={index} className="cate-box1">
                                    <a href={`/category/${item._id}`}>
                                        <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879979/8_tsbmuf.png" />
                                        <h4>{item.name}</h4>
                                    </a>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            {/*NEW*/}
            <div className="new">
                <div className="container">
                    <h2> New Arrival</h2>
                    {/*1*/}
                    <div className="row">
                        <div className="col-3">
                            <div className="pro-item">
                                <div className="pro-thumb">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                    {/*2*/}
                    <div className="row">
                        <div className="col-3">
                            <div className="pro-item">
                                <div className="pro-thumb">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                    {/*3*/}
                    <div className="row">
                        <div className="col-3">
                            <div className="pro-item">
                                <div className="pro-thumb">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
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
                        <a href="#" className="btn btn-dark"> View more</a>
                    </div>
                </div>
            </div>
            {/*FEATURE*/}
            <div className="feature">
                <div className="feature-left" />
                <div className=" feature-right">
                    <h2>black in black</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At cursus justo ac, nisl, vitae. Elementum enim accumsan facilisis diam libero. Mattis tortor eget sollicitudin sollicitudin tempor volutpat. Quis vitae arcu, est convallis velit amet urna, lobortis sed. Blandit aliquet odio venenatis arcu ornare egestas magna proin. Amet amet, a enim mi neque. Volutpat lacus praesent elementum scelerisque aliquet. </p>
                    <a href="#" className="btn">Shop now</a>
                </div>
            </div>
            {/*BLOG*/}
            <div className="blog">
                <div className="container">
                    <h2>REY JOURNAL</h2>
                    <div className="row">
                        <div className="col-4">
                            <div className="blog-item">
                                <a href="#" className="blog-thumb">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880404/i_vq8vir.png" />
                                    <div className="blog-thumb-content">
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                    </div>
                                </a>
                                <span className="small">by admin, december 17,2020</span>
                                <h4>
                                    <a href="/products/:id">Les Benjamins &amp; PUMA Link Up for Carpet Influenced SS20 Drop</a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="blog-item">
                                <a href="#" className="blog-thumb">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880404/i_vq8vir.png" />
                                    <div className="blog-thumb-content">
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                    </div>
                                </a>
                                <span className="small">by admin, december 17,2020</span>
                                <h4>
                                    <a href="/products/:id">Les Benjamins &amp; PUMA Link Up for Carpet Influenced SS20 Drop</a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="blog-item">
                                <a href="#" className="blog-thumb">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880404/i_vq8vir.png" />
                                    <div className="blog-thumb-content">
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                        Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                                    </div>
                                </a>
                                <span className="small">by admin, december 17,2020</span>
                                <h4>
                                    <a href="/products/:id">Les Benjamins &amp; PUMA Link Up for Carpet Influenced SS20 Drop</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <a href="#" className="btn btn-dark"> View more</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductsCategory