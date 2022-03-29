import React from 'react'

type Props = {}

const ProductAdd = (props: Props) => {
  return (
    <div className="w-80 p-3">
      <p className='text-center'>Form add products</p>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Price</label>
          <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Price" />
        </div>
        {/* <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

    </div>
  )
}

export default ProductAdd