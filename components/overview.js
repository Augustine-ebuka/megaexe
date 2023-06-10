import React from 'react'
import styles from '../styles/overview.module.css'
import Image from 'next/image'
import wavy from '../public/wavy2.svg'
import verticalwavy from '../public/waving.svg'

export default function Overview() {
  return (
      <div className={styles.overview} id='overview'>
          <div className={styles.horizontal}>
              <Image src={wavy} alt='overview' style={{pointerEvents:"none"}}></Image>
          
          </div> 
          <div className={styles.vertical}>
              <Image src={verticalwavy}  style={{pointerEvents:"none"}} alt='overview'></Image>
          
          </div> 
          <div className={styles.overviewContent}>
              <div className={styles.overviewCard}>
                  <h1 className='text-lg font- mb-3'>BRANDING</h1>
                  <p className='mt-5 text-orange-500  md:mb-8'>Research</p>
                  <p className='mt-2'>Graphics Design, Product design (UIUX), Brand Identity Management, Brand Guide, Mockups</p>
              </div> 
              <div className={styles.overviewCard}>
                  <h1 className='text-lg font-extrabold'>SOFTWARES</h1>
                  <p className=' mt-6 text-blue-500 md:mb-6'>Design</p>
                  <p className='mt-2'>Website, Progressive Web App, Mobile Applications (Android & IOS), Desktop apps (PC, Mac), Saas, Paas, ERPs, CRMs</p>
              </div> 
              <div className={styles.overviewCard}>
                  <h1 className='text-lg font-extrabold mb-3'>CYBERSECURITY</h1>
                  <p className='mt-6 text-orange-500 md:mb-6'>Development</p>
                  <p className='mt-3'>Risk Management, Penetration Testing, Network Security, Data Protection</p>
              </div> 
              <div className={styles.overviewCard}>
                  <h1 className='text-lg font-extrabold mb-3'>GROWTH</h1>
                  <p className='mt-6 text-blue-500 md:mb-6 pl-3'>Iteration</p>
                  <p className='mt-3'>Internet marketing (SEO, PPC Email/Social Media Marketing), Data Analysis, Content management)</p>
              </div> 
              
          </div>
    </div>
  )
}
