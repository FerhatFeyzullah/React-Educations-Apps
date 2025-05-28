import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, description, image, price, title } = product;

    const navigate = useNavigate();
    return (
        <div className='card'>
            <img src={image} className='image' />
            <div>
                <p className='title'>{title}</p>
                <h3 className='price'>{price} ₺</h3>
            </div>
            <div className='flex-row'>
                <button onClick={() => navigate('/product-details/' + id)} className='product-button'>Detayına Git</button>
            </div>
        </div>
    )
}

export default Product