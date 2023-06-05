import React from 'react'
import styles from '../styles/partnership.module.css'
import { VscDebugBreakpointUnsupported } from 'react-icons/vsc'
import { IoMdCheckmark } from 'react-icons/io'
import { GiGiftOfKnowledge } from 'react-icons/gi'
import { TbCoins } from 'react-icons/tb'
import knowledge from '../public/icons/knowlegde.svg'
import Image from 'next/image'


export default function Partnership() {
  return (
      <div className={styles.partnershipContainer} id='partnership'>
          <div className={styles.partnershipContent}>
              <div className={styles.text}>
                  <h1 className='font-bold' style={{ color: '#0764E7', fontWeight: 'bold', fontSize: '36px' }}>Partnership</h1>
                  <p className='text-white p-7' style={{inlineSize:"500px", overflowWrap:"break-word"}}>We are excited about mission-critical companies with the following characteristics whose their vision and mission aligns perfectly with ours</p>
              </div>
              <div className={styles.cardContainer}>
                  <div className={styles.cards}>
                      <h2 className='ml-2'><VscDebugBreakpointUnsupported size={60} color='#ACA5A5' style={{margin:'auto'}}></VscDebugBreakpointUnsupported></h2>
                      <p className='text-center uppercase'>PRODUCT Solving a pain-point</p>
                  </div>
                  <div className={styles.cards}>
                      <h2 className='ml-2'><IoMdCheckmark size={60} color='#ACA5A5' style={{margin:'auto'}}></IoMdCheckmark></h2>
                      <p className='text-center uppercase'>IDEA HAS Proven product-market fit</p>
                  </div>
                  <div className={styles.cards}>
                      <h2 className='ml-2'><Image src={knowledge} style={{margin:'auto'}} alt='partner'></Image></h2>
                      <p className='text-center uppercase'>KNOWLEDGE OF AUDIENCE AND end market</p>
                  </div>
                  <div className={styles.cards}>
                      <h2 className='ml-2'><TbCoins size={45} color='#ACA5A5' style={{margin:'auto'}}></TbCoins></h2>
                      <p className='text-center uppercase'>ABILITY TO ADAPT TO NEW TECHNOLOGIES (R&D)</p>
                  </div>
                  
                  
              </div>
          </div>
          
    </div>
  )
}
