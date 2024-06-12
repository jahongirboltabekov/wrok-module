import React, { useEffect, useState } from 'react'
import { MdOutlineStar} from "react-icons/md";
import Radio from "@mui/material/Radio";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import './SingleModul.scss'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';


function SingleModul() {

    const[count,setcount] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        let id = searchParams.get('detail')
        if(id){
            axios
                .get(`https://fakestoreapi.com/products/${id}`)
                .then(res => setData(res.data))
        }
    },[searchParams])

    const Plus = () =>{
        return setcount(count+1)
    }

    const Minus = () => {
        if(count>1){
        return setcount(count-1)
        }
        else if(count==1){
        return count
        }
    }

    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "color-radio-button-demo",
        inputProps: { "aria-label": item },
    });

  return (
    <div>
        <div className="in_product">
            <div className="single_img">
                <img src={data?.image} alt="" />
            </div>
            <div className="about_product">
                <h2>{data?.title.slice(0, 20)}</h2>
                <div className="rating">
                    <div className="stars">
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='star_full' />
                        <MdOutlineStar className='emp_star'/>
                    </div>
                    <p className='rate'>({data?.rating.rate})</p>
                    <p className='count'>Submit a review</p>
                </div>
                <div className="line"></div>
                <div className="div_p">
                    <p className='price'>${data?.price*count}</p>
                    <p className="discount"> <span>${((data?.price*100)/24).toFixed(0)}</span> 24% Off</p>
                </div>
                <div className="about_buy">
                    <div className="buy">
                        <p>Availability:</p>
                        <p>Category:</p>
                        <p>Free shipping</p>
                    </div>
                    <div className="buy">
                        <p>{data?.rating.count} items</p>
                        <p>{data?.category.toUpperCase()}</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="change">
                    <div className="change_color">
                        <p>Select Color:</p>
                        <div>
                            <Radio
                            {...controlProps("a")}
                            sx={{
                                color: "red",
                                "&.Mui-checked": {
                                color: "red",
                                },
                            }}
                            />
                            <Radio
                            {...controlProps("c")}
                            sx={{
                                color: "blue",
                                "&.Mui-checked": {
                                color: "blue",
                                },
                            }}
                            />
                            <Radio
                            {...controlProps("b")}
                            sx={{
                                color: "black",
                                "&.Mui-checked": {
                                color: "black",
                                },
                            }}
                            />

                            <Radio
                            {...controlProps("e")}
                            sx={{
                                color: "yellow",
                                "&.Mui-checked": {
                                color: "yellow",
                                },
                            }}
                            />
                        </div>
                    </div>
                    <div className="change_size">
                        <p>Size:</p>
                        <select name="" id="">
                            <option value="">2XL</option>
                            <option value="">XL</option>
                            <option value="">L</option>
                            <option value="">M</option>
                        </select>
                    </div>
                </div>
                <div className="line"></div>
                <div className="buttons">
                    <div className="PlusMinus">
                        <button className='module_btn' onClick={Minus}>-</button>
                        <h5>{count}</h5>
                        <button className='module_btn' onClick={Plus}>+</button>
                    </div>
                    <div className="card">
                        <button className='module_btn'><PiShoppingCartBold />Add To Cart</button>
                        <button className='module_btn'><FiHeart /></button>
                    </div>
                </div>
                <div className="line"></div>
                <div className="social_buttons">
                    <button className='btn_1'><FaFacebookF />Share on Facebook</button>
                    <button className='btn_2'><FaTwitter />Share on Twitter</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SingleModul