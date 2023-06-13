"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import style from '@/styles/navbar.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'
import { } from 'next/font/google';
import '../styles/navbar.module.css'
import Link from 'next/link'


// icons
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'


export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);


  const showMenu = () => {
    setIsMenuVisible(true);
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };
  // scroll

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if user has scrolled up
      if (scrollTop > 0 && !isScrolledUp) {
        setIsScrolledUp(true);
      } else if (scrollTop === 0 && isScrolledUp) {
        setIsScrolledUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolledUp]);

  
  return (
    <>
      <div className={style.headerContainer} style={{backgroundColor:isScrolledUp?"rgba(32, 30, 30,0.7)":"#201E1E"}}>
        <div className='flex justify-between items-center'>
          <div className={style.logoCont}>
            <Link href='#'><Image src={logo} alt='megaexe-logo' height={30}/></Link>
          </div>
          <div className={style.navIconCont}>
            <CgMenuLeftAlt size={30} color='#F0F6FF' onClick={showMenu} style={{cursor:"pointer"}}/>
          </div>
          </div>
      </div>
      <div className={style.navMenuContainer} style={{display:isMenuVisible?'block':'none'}}>
        <div className={style.navHeader}>
          <Image src={logo} alt='megaexe-logo' height={25}/>
          <CgClose style={{ cursor: "pointer", color:"white" }} onClick={hideMenu} />
        </div>
        <div className={style.navBody}>
          <ul>
            <Link href='#home'><li><span className={style.hash}>#</span>home</li></Link>
            <Link href='#overview'><li><span className={style.hash}>#</span>products overview</li></Link>
            <Link href='#partnership'> <li><span className={style.hash}>#</span>partnership</li></Link>
            <Link href='#portfolio'><li><span className={style.hash}>#</span>portfolio</li></Link>
            <Link href='#testimonials'><li><span className={style.hash}>#</span>testimonials</li></Link>
            <Link href='#process'><li><span className={style.hash}>#</span>process</li></Link>
            <Link href='#proposal'><li><span className={style.hash}>#</span>proposal</li></Link>
            <Link href='#future'><li><span className={style.hash}>#</span>future projects</li></Link>
            <Link href='#team'><li><span className={style.hash}>#</span>team</li></Link>
            <Link href='#faqs'><li><span className={style.hash}>#</span>faqs</li></Link>        
          </ul>
        </div>
        <div className={style.navFooter}>
        <div className={style.socialIcon}>
              <Link  href='https://github.com/megaexeglobal' target="_blank"><AiFillGithub size={20}></AiFillGithub></Link>
              <Link  href='https://web.facebook.com/megaexeglobal/' target="_blank"><FaFacebookF size={18}></FaFacebookF></Link>
              <Link  href='' target="_blank"><BsDiscord size={18}></BsDiscord></Link>
              <Link  href='https://www.instagram.com/megaexeglobal/' target="_blank"><BsInstagram size={18}></BsInstagram></Link>
              <Link  href='https://www.linkedin.com/company/megaexe/' target="_blank"><FaLinkedinIn size={18}></FaLinkedinIn></Link>   
              </div> 
        </div>
      </div>
    </>
    )
}
