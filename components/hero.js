"use client";
import React from 'react'
import { useState, } from 'react';
import styles from '../styles/hero.module.css'
import { IoIosCloseCircle, IoMdCopy } from "react-icons/io";
import Button from '@mui/material/Button';
import chart from '../public/chart.png'
import Image from 'next/image'
import StartButton from './button';

// import { TbCopy } from 'react-icons/fa'

export default function HeroSection() {
 
  return (
    <>
      <div className={styles.heroContainer} id='home'>
        <div className={styles.herocontent}>
            <div className={styles.heroleft}>
            <h1>Explore Endless Global Possibilities as a <span className={styles.blue}>Business</span></h1>
            <p className='mb-6'>Grow your brand, deploy your website, App, MVP, and software products all with a unified IT pack tailored to your business.</p>
            {/* <Button variant="contained">contact us</Button> */}
            <div className={styles.buttonSide}>
              <div className={styles.buttonContent}>
                <StartButton></StartButton>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <Image src={chart} alt='chart' className={ styles.imageChart} />
          </div>
        </div>
      </div>
        <div className={styles.heroBelow}>
          <h1>Build an entirely new World</h1>
          <p>Picture it as a roadmap, tailored at any stage and growth of your business</p>
        </div>
    </>
  )
}
