import React from 'react'
import styles from '../styles/proposal.module.css'
import Timeline from '../public/timeline2.svg'
import Image from 'next/image'
import Info from './proposalData.json'




export default function Proposal() {
    const icons = require.context('../public/icons', false, /\.svg$/);
    const infos = Info.posts
  return (
      <div className={styles.proposalContainer} id='proposal'>
          <div className={styles.content}>
              <div className={styles.header}>
                  <h1 style={{fontWeight:"bold"}}>Why build with us?</h1>
                  <p>These are what we do at Megaexe that you might not experience in other Software development companies </p>
              </div>
              <div className={styles.cardContainer}>
                  <div className={styles.leftStepper}>
                      <div className={styles.rightTimeline}>
                          <div className={styles.rightTimelineInfo1st}>
                            <p style={{color:"#00E5FF"}}>24/7</p>
                            <p>Customer Support</p>
                          </div>
                          <div className={styles.rightTimelineInfo2nd}>
                            <p  style={{color:"#00E5FF"}}>Dedicated</p>
                            <p>R&D Team </p>
                          </div>
                      </div>
                      <div className={styles.timeline}>
              <Image src={Timeline} alt='propose'></Image>
                      </div>
                         
                      <div className={styles.leftTimeline}>
                      <div className={styles.leftTimelineInfo1st} style={{marginTop:"147px"}}>
                            <p  style={{color:"#00E5FF"}}>5 min</p>
                            <p>Average Response Time</p>
                          </div>
                      <div className={styles.leftTimelineInfo2nd} style={{marginTop:"230px"}}>
                            <p  style={{color:"#00E5FF"}}>Round the clock</p>
                              <p>Security Monitoring</p>
                          </div>
                      </div>
          <div className={ styles.bottom}><p className='text-white'>3 Months free maintenance </p></div>
                            
          </div>
                  <div className={styles.rightList}>
                      {
                          infos.map(info =>
                            <div className={styles.list}>
                                <Image src={icons(`./icon${info.id}.svg`).default} alt='proposal'></Image>
                                <div key={info.id}>
                                      <p  style={{fontWeight:"bold"}}>{ info.title}</p>
                                      <p>{ info.content}</p>   
                                </div>
                          </div>
                            )
                      }
                      
                  </div>
              </div>
          </div>
    </div>
  )
}
// Fetching data from the JSON file
// import fsPromises from 'fs/promises';
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), '../proposalData.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);

//   return {
//     props: objectData
//   }
// }
