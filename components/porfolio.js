"use client"
import React, { useState } from 'react';
import styles from '../styles/portfolio.module.css';
import PortCard from '@/components/card';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [showItems, setShowItems] = useState(false);

  const openCategory = (cityName) => {
    setActiveTab(cityName);
  };
  const openSelect = () => { 
    setShowItems(!showItems);

  }

  return (
    <div className={styles.portfolioContainer} id='portfolio'>
      <div className={styles.portfolioContent}>
        <div className={styles.text}>
          <h1 className="font-bold">Portfolio</h1>
          <p className="text-white p-7">
            Some of our clients/partners have agreed to list their
            websites/products (you can check them out)
          </p>
        </div>
        <div className={styles.portfolioTab}>
            <div className={ styles.itemHeader}>
               <p style={{color:"white", fontWeight:"bold", textTransform:"uppercase"}}>{activeTab}</p>
                <MdOutlineKeyboardArrowDown size={24} onClick={openSelect}></MdOutlineKeyboardArrowDown>
            </div>
          <div className={styles.tabContent}>
            <div className= {`${styles.itemsWrapper} ${showItems ? styles.show : ''}`}>
                <button
                  className={`${styles.tabbtn} ${
                    activeTab === 'all' ? styles.active : ''
                  }`}
                  onClick={() => openCategory('all')}
                >
                  ALL
                </button>
                <button
                  className={`${styles.tabbtn} ${
                    activeTab === 'branding' ? styles.active : ''
                  }`}
                  onClick={() => openCategory('branding')}
                >
                  BRANDING
                </button>
                <button
                  className={`${styles.tabbtn} ${
                    activeTab === 'ux' ? styles.active : ''
                  }`}
                  onClick={() => openCategory('ux')}
                >
                  UI/UX
                </button>
                <button
                  className={`${styles.tabbtn} ${
                    activeTab === 'development' ? styles.active : ''
                  }`}
                  onClick={() => openCategory('development')}
                >
                  DEVELOPMENT
                </button>
                <button
                  className={`${styles.tabbtn} ${
                    activeTab === 'cybersecurity' ? styles.active : ''
                  }`}
                  onClick={() => openCategory('cybersecurity')}
                >
                  CYBERSECURITY
                </button>

            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div>
            <PortCard category={activeTab}></PortCard>
          </div>
        </div>
      </div>
    </div>
  );
}
