"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from '../../styles/branding.module.css'
import {TbSearch }from 'react-icons/tb'
import{ TbLoader} from 'react-icons/tb'

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
          <Tab  icon={<TbSearch size={25} />} label="Cybersecurity Services" {...a11yProps(0)}  iconPosition='start' sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} />
          <Tab icon={<TbLoader size={25} />}  label="Megaexe Cybershop" {...a11yProps(1)} iconPosition='start' sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={style.rightBelowContentStyle} >
        <p className='mb-4'>Securing the digital frontier is the cornerstone of our operations.</p>
        <p className='mb-4'>A business’s strength is greatly influenced by its level of security, which we tirelessly strive to perfect, adapting to the constantly shifting world of online threats.</p>
        <p className='mb-4'>A typical Cybersecurity initiative may involve establishing robust defense systems, Risk Management, Penetration Testing, Network Security, Data Protection, or implementing best-practice protocols. .</p>
        <p className='mb-4'>
These systems fortify your operations and ensure the safety of your clientele’s data. We also combine this with our Data analysis models to prevent businesses from being treated. </p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={style.rightBelowContentStyle} >
          <div className='flex justify-center items-center text-white' style={{height:"50%"}}>
            <p className='text-lg font-light'>COMING SOON</p>
          </div>
      </div>



      </TabPanel>
    </Box>
  );
}