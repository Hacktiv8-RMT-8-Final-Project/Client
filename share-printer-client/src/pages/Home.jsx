import React from 'react'
import Carousel from '../components/Carousel'
import ButtonNavHome from '../components/ButtonNavHome'
import PrintingNotes from '../components/PrintingNotes'

function Home () {
  return (
    <div>
      <Carousel />
      <ButtonNavHome />
      <PrintingNotes />
    </div>
  ) 
}

export default Home