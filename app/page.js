"use client"
import Footer from '@/components/footer'
import HeroSection from '@/components/hero'
import Overview from '@/components/overview'
import Branding from '@/components/branding'
import ScrollableTabsButtonForce from '@/components/tabs/BrandingTab'
import Partnership from '@/components/partnership'
import Image from 'next/image'
import Portfolio from '@/components/porfolio'
import Testimonials from '@/components/testimonials'
import Process from '@/components/process'
import Pattern from '@/components/patter'
import Proposal from '@/components/proposal'
import Head from 'next/head'
import FutureProject from '@/components/futureProject'
import Teams from '@/components/teams'
import Faqs from '@/components/faq'
import ScrollToTop from "react-scroll-to-top";
// import Stepper from '@/components/stepper'


export default function Home() {
  return (
    <main className="">
      <HeroSection></HeroSection>
      <Overview></Overview>
      <Pattern></Pattern>
      <Branding></Branding>
      <Pattern></Pattern>
      <Partnership></Partnership>
      <Portfolio></Portfolio>
      <Pattern></Pattern>
      <Testimonials></Testimonials>
      <Process></Process>
      <Pattern></Pattern>
      <Proposal></Proposal>
      <Pattern></Pattern>
      <FutureProject></FutureProject>
      <Pattern></Pattern>
      <Teams></Teams>
      <Pattern></Pattern>
      <Faqs></Faqs>
      {/* <Stepper></Stepper> */}
      {/* <ScrollableTabsButtonForce></ScrollableTabsButtonForce> */}
      <ScrollToTop smooth="true" height="20" width='20' style={{padding:"8px"}}></ScrollToTop>
      <Footer></Footer>
    </main>
  )
}
