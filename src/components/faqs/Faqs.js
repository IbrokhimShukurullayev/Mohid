import React from 'react'
import "./faqs.scss"
import soat from "../../assets/images/sogat.png"

const Faqs = () => {
  return (
    <section id="Subscribe">
            <div className="container">
                <div className="section-5">
                    <div className="section-5-text">
                        <h3>Subscribe To Newsletter</h3>
                        <p>Get free guide about smart watches daily.</p>
                        <form className="Subscribe">
                            <input type="email" placeholder="Enter Email Address" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <img src={soat} alt="" />
                    {/* <img src="images/sogat.png" alt="soat"> */}
                </div>
            </div>
        </section>
  )
}

export default Faqs