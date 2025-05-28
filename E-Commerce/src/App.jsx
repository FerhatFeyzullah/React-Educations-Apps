import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import Drawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from 'react-redux'
import './css/Drawer.css'
import { calculateBasket, deleteFromBasket, setDrawer } from './redux/slices/basketSlice'
import { useEffect } from 'react'


function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const { title, image, price, count, id } = products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])




  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer open={drawer} onClose={() => dispatch(setDrawer())} anchor='right'>
          {
            products && products.map((product) => {
              return (

                <div key={product.id} className='flex-row' style={{ padding: '20px' }}>
                  <img src={product.image} className='drawer-image' />
                  <p className='drawer-title'>{product.title}({product.count})</p>
                  <p className='drawer-price'>{product.price} ₺</p>
                  <button onClick={() => {
                    dispatch(deleteFromBasket(product));
                    dispatch(calculateBasket());
                  }} className='drawer-button'>Sil</button>
                </div>
              )
            })
          }
          <div>
            <p>Toplam Tutar: {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
