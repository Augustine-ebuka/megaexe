import React from 'react'
import style from '@/styles/navbar.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Navbar() {
  return (
    <div className={style.header}>
          <Image src={logo} 
          alt="Picture of the author"
          width="57.05px"
          className={style.logo}    
          height="238.96px"
          
          ></Image>
    </div>
  )
}
