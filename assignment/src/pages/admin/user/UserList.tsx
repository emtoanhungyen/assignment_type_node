import React from 'react'
import { TypeUser } from '../../../types/user'

type Props = {
    user: TypeUser[],
    onRemove: (id: string) => void
}

const UserList = (props: Props) => {
    return (
        <div className='table_product_admin'>
            <h2>Danh sách User</h2>
            <table className='table_productslist'>
                <thead>
                    <tr>
                        <th className='th'>STT</th>
                        <th className='th'>Name</th>
                        <th className='th'>Email</th>
                        <th className='th'></th>
                    </tr>
                </thead>
                <tbody>
                    {props.user.map((item, index) => {
                        return <tr key={index}>
                            <td className='td-1'>{index + 1}</td>
                            <td className='td'>{item.name}</td>
                            <td className='td'>{item.email}</td>
                            <td className='td'>
                                <a className='edit' href={`/admin/users/${item._id}/edit`}>Edit</a>
                                <button className='remove' onClick={() => { props.onRemove(item._id) }}>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList