import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://wallpaperaccess.com/full/6385958.jpg' />

                <div className='home__row'>
                    <Product
                        title="Harry Potter and the Philosopher's Stone"
                        price={19.99}
                        image="https://www.jkrowling.com/wp-content/uploads/2018/01/SorcerersStone_2017.png"
                        rating={5} />
                    <Product
                        title="Air Fryer, 1750W 8Qt Visualized"
                        price={145.99}
                        image="https://www.pngmart.com/files/15/Air-Fryer-PNG-Picture.png"
                        rating={4} />
                </div>

                <div className='home__row'>
                    <Product
                        title="Utopia Bedding Queen Bed Sheets Set - 4 Piece Bedding - Brushed Microfiber"
                        price={21.95}
                        image="https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_UF1000,1000_QL80_.jpg"
                        rating={4} />
                    <Product
                        title="Bed Pillows for Sleeping- Standard Size, Set of 2, Cooling Hotel Quality"
                        price={19.89}
                        image="https://m.media-amazon.com/images/I/51Bemp3ZX3L._AC_SL1000_.jpg"
                        rating={4} />
                    <Product 
                        title="Kingtex Duvet, 220 x 240cm, White"
                        price={21.95}
                        image="https://m.media-amazon.com/images/I/51SldUPCYSL._AC_SL1200_.jpg"
                        rating={5} />
                </div>

                <div className='home__row'>
                    <Product 
                        title="Samsung 65 Inch TV UHD 4K Processor Slim Look PQI 2000 HDR 10+ Mega Contrast UHD Dimming Pur Color"
                        price={612.99}
                        image="https://m.media-amazon.com/images/I/61IUE6Ju3vL._AC_SL1500_.jpg"
                        rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
