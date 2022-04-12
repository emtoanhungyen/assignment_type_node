import { useEffect, useState } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { getAllCategory, postCategory, removeCate, updateCategory } from './api/category'
import { add, list, remove, update } from './api/product'
import { dangky, getAll, removeuser } from './api/user'
import PrivteRoute from './components/PrivteRoute'
import CategoryAdd from './pages/admin/category/CategoryAdd'
import CategoryEdit from './pages/admin/category/CategoryEdit'
import CategoryList from './pages/admin/category/CategoryList'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/product/ProductAdd'
import ProductEdit from './pages/admin/product/ProductEdit'
import ProductList from './pages/admin/product/ProductList'
import UserList from './pages/admin/user/UserList'
import CategoryDetail from './pages/CategoryDetail'
import Home from './pages/Home'
import LayoutAdmin from './pages/layout/LayoutAdmin'
import LayoutHome from './pages/layout/LayoutHome'
import LayoutCart from './pages/LayoutCart'
import Login from './pages/Login'
import News from './pages/News'
import ProductDetail from './pages/ProductDetail'
import ProductsCategory from './pages/ProductsCategory'
import ProductsList from './pages/ProductsList'
import Signup from './pages/Signup'
import { TypeCategory } from './types/category'
import { TypeProduct } from './types/products'
import { TypeUser } from './types/user'
function App() {

  const [products, setProducts] = useState<TypeProduct[]>([]);
  const [categorys, setCategorys] = useState<TypeCategory[]>([]);
  const [users, setUsers] = useState<TypeUser[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await getAllCategory();
      setCategorys(data);
    };
    getCategory();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await getAll();
      setUsers(data);
    };
    getUser();
  }, []);

  // Products
  const addProduct = async (product: TypeProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }
  const removeProduct = (id: string) => {
    const confirm = window.confirm('Bạn chắc chắn muốn xóa?');
    if (confirm) {
      remove(id);
      //reRender
      setProducts(products.filter(item => item._id !== id));
    }
  }
  const updateProduct = async (product: TypeProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
  }
  // user
  const onHandleSignup = async (user: TypeUser) => {
    const { data } = await dangky(user);
    setUsers([...users, data]);
  }
  const removeUser = (id: string) => {
    const confirm = window.confirm('Bạn chắc chắn muốn xóa?');
    if (confirm) {
      removeuser(id);
      //reRender
      setUsers(users.filter(item => item._id !== id));
    }
  }
  // Category
  const addCategory = async (category: TypeCategory) => {
    const { data } = await postCategory(category);
    setCategorys([...categorys, data]);
  }
  const removeCategory = (id: string) => {
    const confirm = window.confirm('Bạn chắc chắn muốn xóa?');
    if (confirm) {
      removeCate(id);
      //reRender
      setCategorys(categorys.filter(item => item._id !== id));
    }
  }
  // const updateCategory = async (category: TypeCategory) => {
  //   const { data } = await updateCategory(category);
  //   setProducts(products.map(item => item._id == data._id ? data : item));
  // }
  const updateCate = async (category: TypeCategory) => {
    const { data } = await updateCategory(category);
    setCategorys(categorys.map(item => item._id == data._id ? data : item));
  }

  return (
    <div className="App">
      <main>
        <Routes>
          {/* Router home */}
          <Route path="/" element={<LayoutHome />}>
            <Route index element={<Home />} />
            <Route path='news' element={<News />} />
            <Route path='products'  >
              <Route index element={<ProductsList category={categorys} product={products} />} />
              <Route path=':id' element={<ProductDetail />} />
            </Route>
            <Route path='category' >
              <Route index  element={<ProductsCategory category={categorys} />} />
              <Route path=':id' element={ <CategoryDetail />} />
            </Route>

            <Route path='cart' element={<LayoutCart />} />
          </Route>
          {/* Router admin */}
          <Route path='admin' element={<PrivteRoute> <LayoutAdmin /> </PrivteRoute>}>

            <Route index element={<Navigate to="dashboard" />} />
            <Route path='dashboard' element={<Dashboard />} />

            <Route path='products'>
              <Route index element={<ProductList products={products} onRemove={removeProduct} />} />
              <Route path='add' element={<ProductAdd onAdd={addProduct} />} />
              <Route path=':id/edit' element={<ProductEdit onUpdate={updateProduct} />} />
            </Route>

            <Route path='categorys' >
              <Route index element={<CategoryList category={categorys} onRemove={removeCategory} />} />
              <Route path='add' element={<CategoryAdd onAdd={addCategory} />} />
              <Route path=':id/edit' element={<CategoryEdit update={updateCate} />} />
            </Route>

            <Route path='users' >
              <Route index element={<UserList user={users} onRemove={removeUser} />} />
            </Route> 
          </Route>
          {/* Router đăng ký đăng nhập */}
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup onAdd={onHandleSignup} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App