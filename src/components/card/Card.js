import React , {useEffect , useState} from 'react'
import "./card.scss"
import axios from "axios"


import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Skeleton from '../skeleton/Skeleton'
import Loading from '../loading/Loading'

import star from "../../assets/images/start.svg"
const API_URL = "https://fakestoreapi.com/products/"


function Card() {
    const [data , setData] = useState([])
    const [count , setCount] = useState(6)
    const [categories , SetCategories] = useState([])
    const [categoryValue , setCategoryValue] = useState("")
    const [loading, setLoading] = useState(false)

useEffect(()=> {
        axios
        .get(`${API_URL}/categories`)
        .then(res => SetCategories(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
      setLoading(true)
      let url = categoryValue === "" ? `${API_URL}?limit=${count}` : `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
        .get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [count ,categoryValue])

    const getCategory = (text)=>{
      setCategoryValue(text)
      setData([])
    }

    let products = data?.map(el=> (
        <div class="watches-price">
                            <div class="img">
                                <img className='img' src={el.image} alt="" />
                                    <FaRegHeart/>
                                    <IoCartOutline/>
                            </div>
                            <p>Fitbit Max 1</p>
                            <img src={star} alt="" />
                            <p><span><del>$300.00</del></span>$255.00</p>
                        </div>
    ))

    // let categoriesItem = categories?.map((el , inx) => <option key={inx} value={el}>{el}</option>)
    let categoriesItem = categories?.map((el , inx) => <li onClick={e => getCategory(e.target.innerHTML)} className='filter__item' key={inx} >{el}</li>)
    return (
    <section>
        <div className="container">
          {/* <select onChange={e => setCategoryValue(e.target.value)} name="" id="">
            {
              categoriesItem
            }
          </select> */}
          <div className="filter">
            <h2 className="filter__title">
              Our Latest Products
            </h2>
            <ul className="filter__list">
              <li onClick={()=> getCategory("")} className='filter__item items'>All</li>
              {categoriesItem}
            </ul>
          </div>
          { loading && <Skeleton count={6}/> }
          { loading && <Loading count={4}/> }
          <div className="row">
            {products}
          </div>
            <button onClick={()=>setCount(p => p + 5)} className='view'>View More</button>
        </div>
      </section>
  )
}

export default Card