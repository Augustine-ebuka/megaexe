"use client"
import React from 'react'
import style from '../styles/footer.module.css'
import Image from 'next/image'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

import styleimage from '../public/footer-icon.png'

export default function Footer() {
    return (
      <>
      <div className={style.footerContainer}>
          <div className={style.footerContent}>
                    <div className={style.footerFirst}>
                    
                  <div><CallOutlinedIcon></CallOutlinedIcon><span className='font-bold p-4 text-white'>Call us</span>+2347032420219</div>
                  <p><AlternateEmailOutlinedIcon></AlternateEmailOutlinedIcon><span className='font-bold p-4 text-white'>Email us </span> contact@megaexe.com</p>  
            </div>
              <div className={style.footerSecond}>
                  <p className=''>© Copyright 2023 Megaexe Global LTD
                    23 Sesan Moyegun, Lagos. Nigeria.  
                      Proudly African, Truly Nigerian
                  </p>
                  <div className={style.terms}>
                      <p>Terms of service </p>
                      <p> Privacy Policy </p>
                  </div>
            </div>
                  <div className={style.footerthird}>
                  <p><span className='font-bold text-md pr-4 mb-10 text-white'>Reach Out</span></p>
                        <div className={style.socialIcon}>
                            <AiFillGithub size={18}></AiFillGithub>
                            <FaFacebookF size={18}></FaFacebookF>
                            <BsDiscord size={18}></BsDiscord>
                            <BsInstagram size={18}></BsInstagram>
                            <FaLinkedinIn size={18}></FaLinkedinIn>
                        </div> 
            </div>
          </div> 
    </div>
            {/* <Image src={styleimage} style={{ display: "fixed" }} alt='foter-style'></Image>  */}
            </>    
  )
}
