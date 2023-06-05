import React from 'react'
import styles from '../styles/faq.module.css'
import SimpleAccordion from './accordion'



export default function Faqs() {
  return (
      <div className={styles.faqContainer} id='faqs'>
          <div className={styles.faqContent}>
              <div className={styles.faqText}>
                  <h1>Frequently Asked Questions</h1>
                  <p>Don’t slide though the page without check the FAQs, as this will help clear the remaining doubts you have - assuming if you have one </p>
              </div>
              <div className='flex justify-center items-center'>
                  <div className={styles.faqCarousel}>
                 <SimpleAccordion></SimpleAccordion>   
                  </div>
              </div>
         
          </div>
    </div>
  )
}
