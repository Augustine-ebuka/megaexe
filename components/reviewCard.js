"use client"
import React from 'react'
import reviewData from './reviewData.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/reviewCard.module.css'

export default function ReviewCard() {
  const reviewInfo = reviewData.info;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Slider {...settings}>
      {
        reviewInfo.map(info => { 
          return (
            <div key={info.id} className={styles.reviewCardCont}>
                <div className={styles.reviewContent}>
                <h1 style={{ fontSize: "18px" }}>{ info.name}</h1>
                <h1 style={{ fontSize: "18px" }}>{ info.organization}</h1>
                <p>{ info.review}</p>
                </div>
          </div>    
          )
      })
        }
        </Slider>
    </>
  )
}
