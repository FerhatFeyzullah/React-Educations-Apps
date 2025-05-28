import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {

    const { products, selectedProduct } = useSelector((store) => store.product)
    const { description, image, price, title } = selectedProduct;
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const { id } = useParams();

    const GetProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    useEffect(() => {
        GetProductById();
    }, [])

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0)
            setCount(count - 1);
    }

    const addBasket = () => {
        const payload = {
            id,
            title,
            price,
            description,
            image,
            count
        }
        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    return (
        <div className='product-details-card'>
            <div style={{ marginRight: '40px' }}>
                <img className='detail-image' src={image} />
            </div>
            <div>
                <h1 className='detail-title'>{title}</h1>
                <p className='detail-description'>{description}</p>
                <h2 className='detail-price'>{price} ₺</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} className='detail-icon' />
                    <span className='detail-count'>{count}</span>
                    <CiCircleMinus onClick={decrement} className='detail-icon' />
                </div>
                <div>
                    <button className='detail-button' onClick={addBasket}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails