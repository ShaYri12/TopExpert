import React from 'react'
import WhatOurClientsSay from './components/WhatOurClientsSay'
import FAQ from './components/FAQ'

const Home = () => {
  return (
    <div className='w-full'>
      <FAQ/>
      <WhatOurClientsSay/>
    </div>
  )
}

export default Home