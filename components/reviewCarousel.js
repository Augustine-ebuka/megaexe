"use client"
import React from 'react'
import Card from "../components/card"
import "../styles/carousel.css"
import ReviewCard from './reviewCard';


export default function ReviewCarousel() {
    const breakpoints = [
        {width: 1, itemsToShow:1},
        {width: 500, itemsToShow:2},
        {width: 760, itemsToShow:3},
        {width: 1200, itemsToShow:4},
    ]

    
  return (
     
         <ReviewCard></ReviewCard>
  )
}
