import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/category';
import { TypeCategory } from '../types/category';

type Props = {}

// Đang làm dở chưa hoàn thiện


const CategoryDetail = (props: Props) => {
    const { id } = useParams();
    const [category, setCategory] = useState<TypeCategory[]>([]);
    useEffect(() => {
        const categoryDetail = async () => {
            const { data } = await read(id);
            setCategory(data);
        }
    }, [])
    return (
        <div>
            <div className="new">
                <div className="container">
                    <h2> New Arrival</h2>
                    {/*1*/}
                    <div className="row">
                        {category.map(item => {
                            return <div className="col-3">
                            <div className="pro-item">
                                <div className="pro-thumb">
                                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
                                    <a href="#" className="btn btn-sm"> add to cart</a>
                                </div>
                                <span className="small">New</span>
                                <h4 className="pro-item-name">
                                    <a href="#"></a>
                                </h4>
                                <div className="pro-item-price">$20.00</div>
                            </div>
                        </div>
                        })}
                        
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
        </div>
    )
}

export default CategoryDetail