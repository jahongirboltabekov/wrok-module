import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineShoppingBag } from "react-icons/md";
import { useSearchParams } from 'react-router-dom';
import Model from '../model/Model';
import SingleModul from '../singleModul/SingleModul';
import './Products.scss'

function Products() {

    const [data, setData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        let id = searchParams.get('detail')
        if(id){
            axios
                .get(`https://fakestoreapi.com/products/${id}`)
                .then(res => setDetail(res.data))
        }
    },[searchParams])

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products?limit=6`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.error("Error fetching data: ", err);
            })
    },[])

    const CloseDetailModel = () => {
        setDetail(null)
        setSearchParams({})
    }

    let product = data?.map((el) => 
        <div onClick={() => setSearchParams({detail:el.id})} className="card" key={el.id}>
            <img src={el.image} alt="" />
            <div className="about">
                <h3>{el.title.slice(0,20)}</h3>
                <p>{el.description.slice(0,100)}</p>
                <div className="price_btn">
                    <p className="price">${el.price}</p>
                    <div className="line"></div>
                    <button><MdOutlineShoppingBag className='icon'/> В корзину</button>
                </div>

            </div>

        </div>
    )

    

  return (
    <div className='Product_div'>
        <div className="container">
            <h1>Готовые Наборы</h1>
            <div className="products">
                {product}
            </div>
            {
                detail
                ?
                <Model close={CloseDetailModel}>
                    <SingleModul/>
                </Model>
                :
                <></>
            }
        </div>
    </div>
  )
}

export default Products