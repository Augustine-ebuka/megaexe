"use client"
import React from 'react'
import reviewData from './reviewData.json'
import Carousel from 'react-elastic-carousel';

export default function ReviewCard() {
  const reviewInfo = reviewData.info;
  return (
    <>
      <Carousel>
      {
        reviewInfo.map(info => { 
          return (
            <div key={info.id} className='m-auto p-5 text-white flex justify-center items-center' style={{width:'400px', backgroundColor:'rgba(122	,122,138,0.3'}}>
                <div className='flex-col gap-14 justify-center items-center'>
                <p className='font-bold text-center mb-5' style={{ fontSize: "18px" }}>{ info.name}</p>
                <p className='font-bold text-center mb-5' style={{ fontSize: "18px" }}>{ info.organization}</p>
                <p className='m-auto text-center'>{ info.review}</p>
                </div>
          </div>    
          )
      })
        }
        </Carousel>
    </>
  )
}
