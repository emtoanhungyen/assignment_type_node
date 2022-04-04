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
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map( (item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/admin/products/${item._id}/edit`}>Edit</Link>
                <button type='submit'>Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList