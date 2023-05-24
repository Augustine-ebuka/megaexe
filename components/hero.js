"use client";
import React from 'react'
import { useState, } from 'react';
import style from '../styles/hero.module.css'
import { IoIosCloseCircle,IoMdCopy} from "react-icons/io";
// import { TbCopy } from 'react-icons/fa'

export default function HeroSection() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
  return (
      <div className={style.heroHeader}>
          <h1> We are building a more incredible experience for your <span className={style.blue}>Business</span></h1>
          
          <p>Experience the transformation with Megaexe's new, dynamic website - your digital gateway to superior IT solutions and cutting-edge design.
             
        Don't miss this opportunity to elevate your business; reach out to us today and let's embark on a journey of innovation and success together</p>
      
          <div className={style.popup} style={{ display: isModalVisible ? "block" : "none" }}>
              <div className={style.popheader}>
               <h2> Get in Touch</h2>
          <IoIosCloseCircle className={style.closebtn} size={30} onClick={hideModal}></IoIosCloseCircle>
          
              </div>
                <hr></hr>   
              <div className={style.popbody}>
                <h2 className='pt-5'>Phone:</h2>
                <h2 className='pb-5'>+2349035244019</h2>
                <h2 className=''>Email</h2>
          <h2 className='pb-5'>contact@megaexe.com</h2>
         <IoMdCopy></IoMdCopy>
               </div>
          </div>
          <div className={style.herobtn} onClick={showModal}>Contact Us</div>
    </div>
  )
}
