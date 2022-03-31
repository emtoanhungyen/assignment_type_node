import { useEffect, useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { add, list, remove } from './api/product'
import { dangky } from './api/user'
import PrivteRoute from './components/PrivteRoute'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/product/ProductAdd'
import ProductList from './pages/admin/product/ProductList'
import Home from './pages/Home'
import LayoutAdmin from './pages/layout/LayoutAdmin'
import LayoutHome from './pages/layout/LayoutHome'
import Login from './pages/Login'
import News from './pages/News'
import Products from './pages/Products'
import Signup from './pages/Signup'
import { TypeProduct } from './types/products'
import { TypeUser } from './types/user'
function App() {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState<TypeProduct[]>([]);
  const [users, setUsers] = useState<TypeUser[]>([]);
  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    };
    getProducts();
  }, [])

  const addProduct = async (product: TypeProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }
  const removeProduct = (id: string) => {
    remove(id);
    //reRender
    setProducts(products.filter(item => item.id !== id));
  }
  // const onHandleAdd = async (product: IProduct) => {
  //   const { data } = await add(product);
  //   setProducts([...products, data]);
  // };
  // const onHandleUpdate = async (product: IProduct) => {
  //   const { data } = await update(product);
  //   setProducts(product.map(item => item.id == data.id ? data: item))
  // }
  const onHandleSignup = async (user: TypeUser) => {
    const { data } = await dangky(user);
    setUsers([...users, data]);
  }

  return (
    <div className="App">
      <main>
        <Routes>
          {/* Router home */}
          <Route path="/" element={<LayoutHome />}>
            <Route index element={<Home />} />
            <Route path='news' element={<News />} />
            <Route path='products' element={<Products products={products} />} />
          </Route>
          {/* Router admin */}
          <Route path='/admin' element={ <PrivteRoute><LayoutAdmin /></PrivteRoute>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />

            <Route path='products'>
              <Route index element={<ProductList products={products} onRemove={removeProduct} />} />
              <Route path='add' element={<ProductAdd onAdd={addProduct} />} />
            </Route>
          </Route>
          {/* Router đăng ký đăng nhập */}
          <Route path='login' element={<Login />}/>
          <Route path='signup' element={<Signup onAdd={onHandleSignup}  />}/>
        </Routes>

        {/* <Routes>
          <Route path="/" element={ < Websitelayout />}>
            <Route index element={ < Home />}/>
            <Route path="/product" element={ <h1>Hiển thị Products</h1> }/>
            <Route path="/about" element={ <h1>Hiển thị About</h1> }/>
            <Route path="/signin" element={ <Signin /> }/>
            <Route path="/signup" element={ <Signup onAdd={onHandleSignup} /> }/>
          </Route>

          <Route path="admin" element={ <AdminLayout />}>
            <Route path="products">
                <Route index element={ <ProductList products={products} /> } />
                <Route path="add" element={ <ProductAdd name="Toan" onAdd={onHandleAdd} />} />
                <Route path=":id/edit" element={ <ProductEdit onUpdate={onHandleUpdate} /> } />
            </Route>
          </Route>

        </Routes> */}
      </main>
    </div>
  )
}

export default App