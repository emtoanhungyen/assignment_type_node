import React from 'react'
import { TypeCategory } from '../../../types/category'

type Props = {
    category: TypeCategory[],
    onRemove: (id: string) => void
}

const CategoryList = (props: Props) => {
    return (
        <div>
            <div className='table_product_admin'>
                <h2>Danh sách Category</h2>
                <table className='table_productslist'>
                    <thead>
                        <tr>
                            <th className='th'>STT</th>
                            <th className='th'>Name</th>
                            <th className='th'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.category.map( (item, index) => {
                            return <tr key={index}>
                                <td className='td-1'>{index + 1}</td>
                                <td className='td'>{item.name}</td>
                                <td className='td'>
                                    <a className='edit' href={`/admin/products/${item.id}/edit`}>Edit</a>
                                    <button className='remove' type='submit' onClick={() => { props.onRemove(item._id) }}>Remove</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryList