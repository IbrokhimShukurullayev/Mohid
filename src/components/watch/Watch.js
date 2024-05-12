import React from 'react'
import "./watch.scss"

import watch from "../../assets/images/watch.png"

const Watch = () => {
  return (
    <div class="ilhom">
            <div class="container">
                <home class="home">
                    <div class="home-left">
                        <h1>Discover Most Suitable Watches</h1>
                        <p>
                            Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can
                            find
                            smart
                            watches of
                            almost all brands. So why you are waiting? Just order now!
                        </p>
                        <form class="search">
                            <input type="text" placeholder="Find the best brands" />
                            <button>Search</button>
                        </form>
                    </div>
                    <div class="home-right">
                        <img src={watch} alt="" />
                    </div>
                </home>
            </div>
        </div>
  )
}

export default Watch