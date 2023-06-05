import React from 'react'
import styles from '../styles/teams.module.css'
import TeamCard from './teamCard'


export default function Teams() {
  return (
      <div className={styles.teamContainer} id='team'>
          <div className={styles.teamContent}>
              <div className={styles.teamText}>
                  <h1>Meet our team of experts</h1>
                  <p>We are team of developers, designers and IT specialists who come together for the common goal - which is to transform businesses. </p>
              </div>
              <div className={styles.teamCarousel}>
                  <TeamCard></TeamCard>
              </div>
          </div>
    </div>
  )
}
