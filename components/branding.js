"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import styles from '../styles/branding.module.css'
import BrandingTab from '@/components/tabs/BrandingTab'
import SoftawareTab from '../components/tabs/softwareTab'
import Cybersecurity from '../components/tabs/cybersecurity'
import Growth from '../components/tabs/growth'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'


export default function Branding() {
    // new code
    const [selectedItem, setSelectedItem] = useState('BRANDING');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    document.addEventListener('click', closeAllSelect);

    return () => {
      document.removeEventListener('click', closeAllSelect);
    };
  }, []);

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const closeAllSelect = (event) => {
    if (!event.target.closest('.custom-select')) {
      setIsSelectOpen(false);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedItem(option);
    setIsSelectOpen(false);
  };
  const openSelect = () => { 
    setShowItems(!showItems);

  }
    // end new code here

    function changeCategory(option) {
        setCategory(option);
    }
// collapse and show on mobile
  
  
  return (
    <>
      <div className={styles.brandinContainer}>
          <div className={styles.brandingContent}>
              <div className={styles.upperContent}>
          <div className={styles.leftCont}><h1>Explore How a typical project looks like with Megaexe</h1></div>
                  <div className={styles.rightCont}>
                      <p className='text-white p-2'>
                        <span className='font-bold'>Solutions Pack -</span> We call our Software / IT solutions and Services “Pack” because we 
                        add new services every 3-6 months, so your business can stay “transformed” forever. 
                      </p>
                  </div>
              </div>
              <div className={styles.belowContent}>
            <div className={styles.leftBelowContent}>
              <div className={styles.control} onClick={openSelect}>
                <div className={ styles.itemHeader} style={{backgroundColor:"#2A2424", margin:"5px", width:"80%", borderRadius:"5px"}}>
               <p style={{color:"#707070", fontWeight:"bold"}}>{selectedItem}</p>
                <MdOutlineKeyboardArrowDown size={24}></MdOutlineKeyboardArrowDown>
                </div>
              <div className= {`${styles.itemsWrapper} ${showItems ? styles.show : ''}`} onClick={openSelect}>
              <div className="select-items">
                    <div className={styles.selectItem} onClick={() => handleOptionClick('BRANDING')}>BRANDING</div>
                    <div  className={styles.selectItem} onClick={() => handleOptionClick('SOFTWARE')}>SOFTWARE</div>
                    <div  className={styles.selectItem} onClick={() => handleOptionClick('CYBERSECURITY')}>CYBERSECURITY</div>
                    <div  className={styles.selectItem} onClick={() => handleOptionClick('GROWTH')}>GROWTH</div>      
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.rightBelowContent}>
            <div style={{color:"#BCB8B8", fontFamily:"Lexend Deca", textTransform:"capitalize"}}><p className='font-bold text-xl pl-10 pt-10'>{selectedItem}</p></div>
              
            
                  {(() => {
                            if (selectedItem == "BRANDING") {
                            return <BrandingTab></BrandingTab>
                            } else if(selectedItem== "SOFTWARE"){
                            return  <SoftawareTab></SoftawareTab>
                            } else if(selectedItem== "CYBERSECURITY"){
                            return  <Cybersecurity></Cybersecurity>
                        } else if(selectedItem== "GROWTH"){
                            return  <Growth></Growth>
                        }
                        else {
                                return  <BrandingTab></BrandingTab>
                                
                          }
                          
                        })()}

                      
                  </div>
              </div>
              
          </div>
          
      </div>
      </>
  )
}
