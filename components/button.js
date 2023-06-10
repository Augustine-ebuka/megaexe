import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../styles/button.module.css';
import { ImCancelCircle } from 'react-icons/im';
import { FiCopy } from 'react-icons/fi';

export default function StartButton() {
  const [copyClipPhone, setCopyPhone] = useState(false);
  const [copyClipEmail, setCopyEmail] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

//   const copyTextFunc = () => {
//   setCopyText(true);
// }

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    
    if (type === 'phone') {
      setCopyPhone(true);
      setTimeout(() => {
        setCopyPhone(false);
      }, 2000);
    } else if (type === 'email') {
      setCopyEmail(true);
      setTimeout(() => {
        setCopyEmail(false);
      }, 2000);
    }
    toast.success('Copied to clipboard!', { toastId: 'copyToast', position:'bottom-right' });
  };

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonContent}>
        <div
          className={styles.modal}
          style={{
            backgroundColor: '#000F19',
            borderRadius: '10px',
            width: '250px',
            display: displayModal ? 'block' : 'none',
          }}
        >
          <div className={styles.modalText}>
            <div className="flex justify-between">
              <p style={{color:"#0764E7", fontSize:"18px", padding:"10px", fontWeight:"bolder"}}>Get in touch</p>
              <ImCancelCircle
                size={27}
                color="#BCB8B8"
                style={{ cursor: 'pointer' }}
                onClick={closeModal}
              />
            </div>
            <hr />
            <div className={styles.textS}>
              <div className='p-0 m-0'>
                <p>Phone:</p>
                <div className="flex justify-between">
                  <p>+2347032420219</p>
                  <div style={{paddingTop:"7px"}}>
                    <FiCopy
                      size={23}
                      color={ copyClipPhone?"green":"#BCB8B8"}
                      onClick={() => copyText('+2347032420219', 'phone')
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textS}>
              <div>
                <p>Email:</p>
                <div className="flex justify-between">
                  <p>contact@megaexe.com</p>
                  <div style={{paddingTop:"7px"}}>
                      <FiCopy
                        size={23}
                        color={ copyClipEmail?"green":"#BCB8B8"}
                        onClick={() => copyText('contact@megaexe.com','email')}
                      />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center text-xs font-bold p-2 rounded-md text-white"
          onClick={openModal}
          style={{ width: '150px', cursor: 'pointer', backgroundColor:"#0764E7" }}
        >
          Start Building
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
