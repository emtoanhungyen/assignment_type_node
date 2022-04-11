import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAllCategory } from '../../../api/category';
import { TypeCategory } from '../../../types/category';
import { TypeProduct } from '../../../types/products'

type Props = {
  products: TypeProduct[],
  onRemove: (id: string) => void
}

const ProductList = (props: Props) => {
  // const [category, setCategory] = useState<TypeCategory[]>([]);
  // useEffect(() => {
  //   const getCategory = async () => {
  //     const { data } = await getAllCategory();
  //     setCategory(data);
  //   }
  //   getCategory();
  // }, []);
  return (
    <div className='table_product_admin'>
      <h2>Danh sách Products</h2>
      <table className='table_productslist'>
        <thead>
          <tr>
            <th className='th'>STT</th>
            <th className='th'>Name</th>
            <th className='th'>Price</th>
            <th className='th'>Detail</th>
            <th className='th'></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return <tr key={index}>
              <td className='td-1'>{index + 1}</td>
              <td className='td'>{item.name}</td>
              <td className='td'>{item.price}</td>
              <td className='td'>{item.details}</td>
              <td className='td'>
                <a className='edit' href={`/admin/products/${item._id}/edit`}>Edit</a>
                <button className='remove' onClick={() => { props.onRemove(item._id) }}>Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList