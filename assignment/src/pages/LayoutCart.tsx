import React from 'react'

type Props = {}

const LayoutCart = (props: Props) => {
    return (
            <div className="view-cart">
                <div className="container">
                    <h1 className="page"> Shopping Bag</h1>
                    <table className="cart-table">
                        <tbody><tr>
                            <th/>
                            <th>Image</th>
                            <th> Product</th>
                            <th> Unit</th>
                            <th> Quantity</th>
                            <th> Price</th>
                            <th> Subtotal</th>
                        </tr>
                            <tr>
                                <td className="text-center">
                                    <a href="#"><i className="far fa-trash-alt" aria-hidden="true" />
                                    </a>
                                </td>
                                <td className="text-center">
                                    <a href="Product Detail.html">
                                        <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/d_whhstb.png" height={150} />
                                    </a>
                                </td>
                                <td>
                                    <p>
                                        <a href="Product Detail.html">
                                            <b>Puma Downtown Graphic Tee</b>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#" className="small">SKU: SP00001</a>
                                    </p>
                                    <p>
                                        <a href="#" className="small"><i>Color: Black - Size: M </i></a>
                                    </p>
                                </td>
                                <td className="text-center">
                                    Pcs
                                </td>
                                <td className="text-center">
                                    <input type="number" defaultValue={1} className="from-contr" />
                                </td>
                                <td className="text-center">$30</td>
                                <td className="text-center">$30</td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <a href="#"><i className="far fa-trash-alt" aria-hidden="true" />
                                    </a>
                                </td>
                                <td className="text-center">
                                    <a href="#">
                                        <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/d_whhstb.png" height={150} />
                                    </a>
                                </td>
                                <td>
                                    <p>
                                        <a href="#">
                                            <b>Puma Downtown Graphic Tee</b>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#" className="small">SKU: SP00001</a>
                                    </p>
                                    <p>
                                        <a href="#" className="small"><i>Color: Black - Size: M </i></a>
                                    </p>
                                </td>
                                <td className="text-center">
                                    Pcs
                                </td>
                                <td className="text-center">
                                    <input type="number" defaultValue={1} className="from-contr" />
                                </td>
                                <td className="text-center">$30</td>
                                <td className="text-center">$30</td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <a href="#"><i className="far fa-trash-alt" aria-hidden="true" />
                                    </a>
                                </td>
                                <td className="text-center">
                                    <a href="#">
                                        <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/d_whhstb.png" height={150} />
                                    </a>
                                </td>
                                <td>
                                    <p>
                                        <a href="#">
                                            <b>Puma Downtown Graphic Tee</b>
                                        </a>
                                    </p>
                                    <p>
                                        <a href="#" className="small">SKU: SP00001</a>
                                    </p>
                                    <p>
                                        <a href="#" className="small"><i>Color: Black - Size: M </i></a>
                                    </p>
                                </td>
                                <td className="text-center">
                                    Pcs
                                </td>
                                <td className="text-center">
                                    <input type="number" defaultValue={1} className="from-contr" />
                                </td>
                                <td className="text-center">$30</td>
                                <td className="text-center">$30</td>
                            </tr>
                        </tbody></table>
                    <div className="row">
                        <div className=" col-8  ">
                            <div>
                                <input type="text" placeholder="Enter coupon here" className="form-control" />
                                <button><a href="#">Apply </a></button>
                            </div>
                            <a href="#"><i className="fas fa-arrow-left" aria-hidden="true" /> Continue Shopping</a>
                        </div>
                        <div className=" col-4">
                            <table className=" table-total">
                                <tbody><tr>
                                    <th>Sub-total</th>
                                    <td>$180</td>
                                </tr>
                                    <tr>
                                        <th>VAT 10%</th>
                                        <td>$18</td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td>$198</td>
                                    </tr>
                                </tbody></table>
                            <p>
                                <a href="check out.html" className="btn btn-dark">Process to Checkout </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default LayoutCart