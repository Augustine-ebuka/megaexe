import React from 'react'
import Image from 'next/image'
import pattern from '../public/pattern.png'
import styles from '../styles/process.module.css'
import geometry from '../public/geometarypat.svg'

export default function Process() {
    return (
      <>
            <div className={styles.prcessContainer} id='process'>
          <div className={styles.processContent}>
              <div className={styles.pattern}>
                  <Image src = {pattern} alt="pattern" />
              </div>
              <div className={styles.processText}>
                  <h1 className='font-bold' style={{color:"#0764E7"}}>What's the Process?</h1>
                  <div style={{width:"80px", height:"5px", backgroundImage: "linear-gradient(75deg, #673AB7 , #00BCD4)", borderRadius:"10px"}}></div>
                  <p>All the products and services we build require all or combination of these processes</p>
              </div>
              <div className={styles.processCard}>
                  <div className={styles.leftcard}>
                      <div className={styles.uppercard}>
                          <p className='p-1 font-bold text-white'>Research</p>
                          <p className='p-1'>Planning, Understanding project requirements, Ideation and Analysis, Focused group</p>
                      </div>
                      <div className={styles.lowercard}>
                          <p  className='pl-3 pt-2 font-bold mt-4 text-white'>Design</p>
                          <p  className='pl-3'>Wireframing, User flow/stories, UIUX, Creating test cases, Prototyping, Technical Design.</p>
                      </div>
                  </div>
                  <div className={styles.rightcard}>
                  <div className={styles.upperRightcard}>
                            <div className={styles.detachedBlue} style={{backgroundColor:"#070648", borderRadius:"7px", padding:"5px"}}></div>
                            <div className={styles.upperRightcardText}>
                                <p className='p-1 font-bold ml-6 text-white'>Development</p>
                                <p className='ml-6'>Agile development, Rapid deployment, Alpha and Beta Testing, MVP and full rollout</p>  
                            </div>
                      </div>
                      <div className={styles.lowerRightcard}>
                      <div className={styles.detachedBlue} style={{backgroundColor:"#070648", borderRadius:"7px", padding:"5px"}}></div>
                            <div className={styles.upperRightcardText}>
                                <p className='p-1 font-bold ml-6 text-white'>Iteration / Maintenance </p>
                                <p className='ml-6'>Client engagement and training, 24/7 Support, Bug fixes, Reporting and analysis</p>  
                            </div>
                      </div>
                  </div>
              </div>
          </div>
          
            </div>
            </>
  )
}
