import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import styles from '../../styles/terms.module.css'

export default function Terms() {
  return (
    <div style={{backgroundColor:"#000F19"}}>
      <div>
        <div className={styles.conText}>
          <h1 style={{color:"#0764E7", fontSize:"32px", marginBottom:"20px"}}>Terms of use</h1>
          <p className='text-white font-bold' style={{fontSize:"14px"}}>Updated May 2022</p>
        </div>
        <div className={styles.textBody}>
          <h1>Terms and Conditions of Use</h1>
          <p>By accessing this website, you agree to be bound by this website’s Terms and Conditions of Use, all applicable laws, and regulations and agree that you are responsible for compliance with any applicable local laws.</p>
          <h1>Prohibited Use </h1>
          <p>You are prohibited from using or accessing this site if you do not agree with any of these terms.
            Use License Permission is granted to temporarily download one copy of the materials (information or software) on the MEGAEXE website for personal, non-commercial transitory viewing only.</p>
          <h1>Restrictions under License</h1>
          <p>1. modify or copy the materials;2. use the materials for any commercial purpose, or for any public display (commercial or non-commercial);3. attempt to decompile or reverse engineer any software contained on Ruckus Megaexes’ website;4. remove any copyright or other proprietary notations from the materials; or5. transfer the materials to another person or “mirror” the materials on any other server.</p>
          <h1>Termination of License </h1>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by MEGAEXE at any time.</p>
          Disclaimer 

<p>The materials on the MEGAEXE website are provided on “as is” basis.</p>

<p>Limitations </p>

<p>In no event shall MEGAEXE or its suppliers, third Parties, Vendors be liable for any damages.</p>

<p>Revisions and Errata </p>

<p>The materials / Products appearing on MEGAEXE website could include technical, typographical, or photographic errors.</p>

          <p>Links </p>
          <p>MEGAEXE has reviewed all of the sites linked to its Internet website; but will be not responsible for the contents of any such linked site.</p>

<p>Site Terms of Use Modifications </p>

<p>MEGAEXE may revise these terms of use for its website at any time with or without notice.</p>

<p>Governing Law </p>

<p>Any claim relating to the MEGAEXE website shall be governed by Country Nigeria without regard to its conflict of law provisions.</p>

<p>Contacting Us </p>

<p>If there are any questions regarding this privacy policy you may contact us using the contact us pag</p>
        </div>
        </div>
       <Footer></Footer>
    </div>
  )
}
