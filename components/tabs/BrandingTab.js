"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from '../../styles/branding.module.css';
import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { TfiBook } from 'react-icons/tfi'




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
      </div>
    
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color:"white" }}>
          <Tabs value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            
          <Tab  icon={<AiOutlineEye  size={20}/>}label="Graphics Design" iconPosition="start" {...a11yProps(0)} sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} />
          <Tab icon={<HiOutlineLockClosed size={20}/>} label="Product Design" iconPosition="start" {...a11yProps(1)} sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}}/>
          <Tab icon={<TfiBook size={20}/> } label="Brand Guideline" iconPosition="start"{...a11yProps(2)} sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={style.rightBelowContentStyle} >
          <span className='mb-4 block'>At Megaexe, we render Graphics design as a “Pack” alongside Software development and/or Digital Marketing.</span>
          
          <span className='mb-4 block'>In our recent project with AMCEC, we offered logo design alongside with the development of the Web application.</span>
          
          <span className='mb-4 block'>We started with research, making sure we observe all the tiny details relating to the business; it’s customers, competitors, unique selling point, vision, mission and goals.</span>
          
          <span className='mb-4 block'>Our, adept team have to include all the findings in an ideation session, where we make up to, 3-4 sketches of the proposed design. </span>
          
            <span className='mb-4 block'>Once accepted by the project sponsor, the logo/flyer will be designed, with precision and iterative process, until the final result is accepted. </span>
          
         </div>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={style.rightBelowContentStyle} >
          <p>Product Designing (UIUX) is a critical part of any great software we build. At Megaexe, we commonly offer Product Design as a “Pack” alongside Software / Blockchain development or as a standalone solution.</p> 
          <p className='pb-4'>  In a recent project with Home of Victory (HOV), we planned to develop a chatting platform. </p>
          <p className='pb-4'>We analyzed business needs as usual, created use cases /scenario, user story, acceptance criteria, then a low_fi version of the UI. </p>
          <p className='pb-4'>  We would walk the project sponsor through this initial design, which after acceptance, a high fidelity prototype will be crated, which depicts the best way the product will work. </p>
          <p className='pb-4'>Businesses, can choose to turn this prototype into an MVP, or advance into development of the product.  </p>
        </div>





      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={style.rightBelowContentStyle} >
        <p className='pb-4'> Brand Guidelines encompasses everything your company needs to stand out in the business world (Both online and offline).</p>
          <p className='pb-4'> We usually offer free logo and brand style guides, to businesses if we are building a software for them.</p>
          <p className='pb-4'>You Brand Story and Logo Guidelines</p>
          <ul style={{ listStyleType:"circle", marginLeft:"15px"}}>
            <li>Brand Color Palette</li>
            <li> Typography and Font Guidelines</li>
            <li>Image Guidelines</li>
            <li> Brand Voice and tone</li>
            <li>Image Guidelines</li>
            <li>Visual identity and Iconography</li>
          </ul>
      </div>
      </TabPanel>
      </Box>
      </>
  );
}