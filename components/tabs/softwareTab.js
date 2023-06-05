"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from '../../styles/branding.module.css'
import { BiCodeAlt } from 'react-icons/bi'
import { AiOutlineAppstoreAdd} from 'react-icons/ai'
import { GiChaingun } from 'react-icons/gi'

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

export default function SoftwareTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<BiCodeAlt size={25} />} label="Web Development" {...a11yProps(0)} iconPosition='start' sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} />
          <Tab icon={<AiOutlineAppstoreAdd  size={25}/>} label="Software Applications" iconPosition='start' {...a11yProps(1)} sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}}/>
          <Tab icon={<GiChaingun size={25} />} label="Blockchain Development" {...a11yProps(2)} iconPosition='start' sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={style.rightBelowContentStyle} >
          <p className='pb-4'> Software development is the hallmark of what we do at Megaexe. 
            We believe all businesses are shapen by great products. And we keep innovating to keep up to speed with the ever-changing business landscape.</p>
          <p className='pb-4'>Typical Web development can include creating a Website/Web application, which can serve as a Solution, Software as a Service (SaaS), Platform as a Service (PaaS), and internet of things.</p>
          <p className='pb-4'> Picture having your e-learning platform built or our recent project to develop a highly scalable platform for dropshipping and storefronts.</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={style.rightBelowContentStyle} >
        <p className='pb-4'> Businesses can make their products more personalized and accessible to a wide range of customers by building a Mobile or Desktop application. </p>
        <p className='pb-4'>This is a scaling strategy for companies with a Web application to offer their services. Or as a new product for companies looking to break into new or existing markets. </p>
        <p className='pb-4'>Typical Software Applications can include a Mobile app for Android or IOS, a Desktop app for PC and Mac, and Linux. </p>   
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={style.rightBelowContentStyle} >
        <p className='pb-4'>Blockchain Development may seem new, but we are on top of the game with recent advancements.</p>
          <p className='pb-4'> Businesses venturing into Blockchain development understand the intricacies that come with it. They choose from a variety of options, including:</p> 
          <ul style={{ listStyleType:"circle", marginLeft:"15px"}}>
            <li> DAPPS DEVELOPMENT</li>
            <li> SMART CONTRACT DEPLOYMENT</li>
            <li> CRYPTO WALLET (DEX and CEX)</li>
            <li>  CRYPTOCURRENCY TOKEN</li>
            <li>NFT MARKETPLACES</li>
          </ul>
      <p className='pb-4'>Prepare your business for the next phase of the internet. Where your data is trustless, secured, interoperable and decentralized..</p>
      </div>
      </TabPanel>
    </Box>
  );
}