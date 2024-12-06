import React from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/CarouselSlider.jsx'
import Category from '../../components/Category/Category.jsx'
import Product from '../../components/Product/Product.jsx' 

function Landing() {
  return (
    <div>
        <Layout>
      <Carousel/>
      <Category/>
      <Product/>
      </Layout>
    </div>
  )
}

export default Landing
