import React from 'react'
import "./home.scss"

import home1 from "../../assets/images/home1.png"
import home2 from "../../assets/images/home2.png"
import home3 from "../../assets/images/home3.png"


const Home = () => {
  return (
    <section id="watch">
            <div className="container">
                <div className="watches">
                    <div className="watch-1">
                        <img src={home3} alt="" />
                        {/* <img src="images/soattttt" alt="Apple"> */}
                        <div className="watch-1-right">
                            <h3>Apple</h3>
                            <p>Apple is one of the most famous smart watches providing company.</p>
                        </div>
                    </div>
                    <div className="watch-2">
                        <img src={home1} alt="" />
                        {/* <img src="./images/xiaomi_redmi_watch_2_lite_azul_01_l-removebg-preview 1.png" alt="Apple"> */}
                        <div className="watch-1-right">
                            <h3>Xiaomi</h3>
                            <p>Xiaomi smart watches are produced by MI company.</p>
                        </div>
                    </div>
                    <div className="watch-3">
                        {/* <img src="./images/soassst.png" alt="Apple"> */}
                           <img src={home2} alt="" />
                        <div className="watch-1-right">
                            <h3>FitBit</h3>
                            <p>AFitBit smart watches are best for there health and fitness features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Home