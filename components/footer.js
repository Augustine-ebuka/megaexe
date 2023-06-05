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
import Link from 'next/link'

import styleimage from '../public/footer-icon.png'

export default function Footer() {
    return (
      <>
        <div className={style.footerContainer}>
         <hr style={{width:"90%", marginTop:"10px", marginBottom:"25px"}}></hr>
         
          <div className={style.footerContent}>
            <div className={style.footerWrapper}>

                    <div className={style.footerFirst}>
                    
                  <div><CallOutlinedIcon></CallOutlinedIcon><span className='font-bold p-4 pt-0 text-md text-white'>Call us</span>+2347032420219</div>
                  <p><AlternateEmailOutlinedIcon></AlternateEmailOutlinedIcon><span className='font-bold p-4 pt-0 text-md text-white'>Email us </span>contact@megaexe.com</p>  
            </div>
              <div className={style.footerSecond}>
                  <p className='font-sm'>© Copyright 2023 Megaexe Global LTD
                    23 Sesan Moyegun, Lagos. Nigeria.  
                      Proudly African, Truly Nigerian
                  </p>
                  <div className={style.terms}>
                  <Link href='/terms' className='cursor-pointer'><p>Terms of service</p></Link> 
                    <Link href='/privacy' className='cursor-pointer'><p>Privacy Policy </p></Link>
                  </div>
            </div>
                  <div className={style.footerthird}>
                  <p><span className='font-bold text-md pr-4 mb-10 text-white'>Reach Out</span></p>
                        <div className={style.socialIcon}>
                            <Link href='https://github.com/megaexeglobal'><AiFillGithub size={18}></AiFillGithub></Link>
                            <Link href='https://web.facebook.com/megaexeglobal/'><FaFacebookF size={18}></FaFacebookF></Link>
                           <Link href=''><BsDiscord size={18}></BsDiscord></Link> 
                            <Link href='https://www.instagram.com/megaexeglobal/'><BsInstagram size={18}></BsInstagram></Link>
                            <Link href=' https://www.linkedin.com/company/megaexe/'><FaLinkedinIn size={18}></FaLinkedinIn></Link>
                        </div> 
            </div>
          </div> 
            </div>
          <Image src={styleimage} className={style.footerstyle}></Image>
    </div>
            {/* <Image src={styleimage} style={{ display: "fixed" }} alt='foter-style'></Image>  */}
            </>    
  )
}
