import React from 'react'

type Props = {}

const ProductList = (props: Props) => {
  return (
    <div>
      <section className="ftco-section">
        <div className="container">
        <p className='text-center'>Danh sách Product</p>
          <div className="row">
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-responsive-xl">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="alert" role="alert">
                      <td>
                        <label className="checkbox-wrap checkbox-primary">
                          <input type="checkbox" defaultChecked />
                          <span className="checkmark" />
                        </label>
                      </td>
                      <td className="d-flex align-items-center">
                        <div className="img" style={{ backgroundImage: 'https://res.cloudinary.com/dd0io3fh2/image/upload/v1645351972/icon_saisyu.png' }} />
                        <div className="email">
                          <span>Product A</span>
                        </div>
                      </td>
                      <td>999</td>
                      <td className="status"><span className="active">Category</span></td>
                      <td>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true"><i className="fa fa-close" /></span>
                        </button>
                      </td>
                    </tr>
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