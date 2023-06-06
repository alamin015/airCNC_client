import React from 'react'
import { Helmet } from 'react-helmet-async'
import Categories from '../Category/Categories'
import Room from '../Room/Room'

const Home = () => {
  return (
    <div>
        <Helmet>
            <title>AirCNC- Home</title>
        </Helmet>
        <Categories />
        <Room />
    </div>
  )
}

export default Home