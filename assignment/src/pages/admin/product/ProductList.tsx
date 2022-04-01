import React from 'react'
import { Link } from 'react-router-dom';
import { TypeProduct } from '../../../types/products'

type Props = {
  products: TypeProduct[];
  onRemove: (id: string) => void
}

const ProductList = (props: Props) => {
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <p className='text-center py-3'>Danh sách Product</p>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-responsive-xl">
                  <thead>
                    <tr>
                      <th></th>
                      <th>STT</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.products.map( (item, index) => {
                      return <tr className="alert" role="alert">
                        <td>
                          <label className="checkbox-wrap checkbox-primary">
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </td>
                        <td key={index}>{index + 1}</td>
                        <td className="d-flex align-items-center">
                          <div className="email">
                            <span>{item.name}</span>
                          </div>
                        </td>
                        <td>{item.price}</td>
                        <td className="status"><span className="active">Category</span></td>
                        <td>
                          <a className='' href="">Edit</a>
                          <button type='submit' className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true"><i className="fa fa-close" /></span>
                          </button>
                        </td>
                      </tr>
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProductList