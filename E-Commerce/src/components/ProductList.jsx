import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllProducts } from '../redux/slices/productSlice';
import Product from './Product'

function ProductList() {

    const dispatch = useDispatch();

    const { products } = useSelector((store) => store.product)


    useEffect(() => {
        dispatch(GetAllProducts())
    }, [])

    return (
        <div className='flex-row' style={{ flexWrap: 'wrap' }}>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList
