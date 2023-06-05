import React from 'react'
import styles from '../styles/testimonials.module.css'
import ReviewCard from './reviewCard'

export default function Testimonials() {
  return (
      <div className={styles.testimonialsContainer} id='testimonials'>
          <div className={styles.testimonialsContent}>
              <div className={styles.testimonialsText}>
              <h1 className='font-bold text-center' style={{color:'#0764E7'}}>Testimonials</h1>
                <p className='text-white p-7'>Megaexe is a platform that’s open to every Business. They share their experiences to help others make better choices and encourage companies to up their game</p>
              </div>
              <div className={styles.testimonialsCarousel}>
                  <ReviewCard></ReviewCard>
              </div>
          </div>
    </div>
  )
}
