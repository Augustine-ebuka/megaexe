"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from '../../styles/branding.module.css'
import {MdPercent} from 'react-icons/md'
import {TbDatabase} from 'react-icons/tb'
import {IoMdCloudOutline} from 'react-icons/io'
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
        <Tabs value={value} variant="scrollable" onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<MdPercent size={25}/>} label="Digital Marketing" iconPosition='start' {...a11yProps(0)}  sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} />
          <Tab icon={<TbDatabase size={25} />} iconPosition='start' label="Data Analysis" {...a11yProps(1)} sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}}/>
          <Tab icon={<IoMdCloudOutline size={25}/>} label="Cloud" iconPosition='start'  {...a11yProps(1)} sx={{color:"#707070", textTransform:"capitalize", fontSize:"14px"}} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className={style.rightBelowContentStyle} >
       <p className='mb-4'> We firmly believe that the visibility of a business significantly shapes its success, and we incessantly innovate to keep in tune with the ever-evolving world of digital media.</p>
<p className='mb-4'>Digital marketing at Megaexe typically involves building a robust online presence, crafting tailored marketing campaigns, and optimizing web platforms for better visibility. 
These tools help businesses reach and engage with their audiences effectively.</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={style.rightBelowContentStyle} >
        <div className='flex justify-center items-center text-white' style={{height:"50%"}}>
            <p className='text-lg font-light'>COMING SOON</p>
          </div>
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className={style.rightBelowContentStyle} >
        <div className='flex justify-center items-center text-white' style={{height:"50%"}}>
            <p className='text-lg font-light'>COMING SOON</p>
          </div>
      </div>
      </TabPanel>
    </Box>
  );
}