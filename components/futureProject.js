import React from 'react'
import styles from '../styles/future.module.css'
import Image from 'next/image'
import spiral from '../public/spiral.svg'
import iconset1 from '../public/icons/iconset1.svg'
import dataFuture from '../components/futureData.json';

export default function FutureProject() {
    
    const icons = require.context('../public/icons', false, /\.svg$/);
    const futureData = dataFuture.left;
    const futureData2 = dataFuture.right;
    // const futureData = dataFutre.info
  return (
      <div className={styles.futureContainer} id='future'>
          <div className={styles.futureContent}>
              <div className={styles.futureLeft}>
                  <div className={styles.text}>
                      <h1 className='text-light'>Building  <span className={styles.together}>together</span></h1>
                      <p>We've listed a few industries we planned to build software on; If you need clarification on whether your business fits the bill, we'd love to talk anyway.</p>
                  </div>
                  <div className={styles.icon}>
                      <Image src={spiral} style={{width:'60%'}} alt='future'></Image>
                  </div>
              </div>
              <div className={styles.futureRight}>
                  <div className={styles.Leftcards}>
                      <div className={styles.cardHeader} style={{ borderLeft: "1px solid #4BD2E4;" }}>
                          <p className='font-bold'>Horizontal software solutions across industries</p>
                      </div>
                      {
                          futureData.map((infoLeft) => (
                            <div className={styles.cards} key={infoLeft.id}>
                              <Image src={icons(`./iconset${infoLeft.id}.svg`).default} alt='future' />
                              <p style={{ inlineSize: "170px", overflowWrap: "break-word", paddingTop:"7px" }}>{infoLeft.content}</p>
                            </div>
                          ))
                      }
                  </div>
                  <div className={styles.Rightcards}>
                  <div className={ styles.cardHeader} style={{borderLeft:"1px solid #FF83B7"}}>
                          <p className='font-bold'>Horizontal software solutions across industries</p>
                    </div>
                    {
                          futureData2.map((infoRight) => (
                            <div className={styles.cards} key={infoRight.id}>
                              <Image src={icons(`./iconset${infoRight.id}.svg`).default} alt='future' />
                              <p style={{ inlineSize: "170px", overflowWrap: "break-word", paddingTop:"7px"  }}>{infoRight.content}</p>
                            </div>
                          ))
                      }
                  </div>
              </div>
              
          </div>
    </div>
  )
}
