"use client"
import React from 'react'
import Carousel from 'react-elastic-carousel';
import Card from "../components/card"
import "../styles/carousel.css"


export default function carousel() {
    const breakpoints = [
        {width: 1, itemsToShow:1},
        {width: 500, itemsToShow:2},
        {width: 760, itemsToShow:3},
        {width: 1200, itemsToShow:4},
    ]
    
  return (
      <Carousel breakPoints={breakpoints} >
          <Card></Card>
    </Carousel>
  )
}
