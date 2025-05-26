import React, { useState } from 'react'
import '../currency.css'
import { FaArrowRight } from "react-icons/fa";
import axios from 'axios'

function Currency() {

    const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
    const API_KEY = "fca_live_syBt6fzfUHFuD8BMP79AkAkzh8ZMrbvKYlF9jF9B";

    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        var values = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const sonuc = (values.data.data[toCurrency] * amount).toFixed(2);
        setResult(sonuc);

    }

    return (
        <div className='currency-main'>
            <div className='currency-title-div'>
                <h3>DÖVİZ KURU UYGULAMASI</h3>
            </div>
            <div className='currency-body'>

                <input type="number" className='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />

                <select className='from-currency'
                    onChange={(e) => setFromCurrency(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>

                </select>

                <FaArrowRight style={{ fontSize: 20 }} />

                <select className='to-currency'
                    onChange={(e) => setToCurrency(e.target.value)}>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>

                </select>

                <input type="number" className='result'
                    value={result}
                    onChange={(e) => setResult(e.target.value)} />

            </div>
            <div>
                <button onClick={exchange} className='button'>Çevir</button>
            </div>
        </div>
    )
}

export default Currency