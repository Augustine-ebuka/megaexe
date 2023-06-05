"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faqData from './faqData.json'
import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';


export default function SimpleAccordion() {
    const information = faqData.info;
  return (
      <div>
          {
              information.map((faqInfo) => {
                  return(
                <div key={faqInfo.id}>
                <Accordion sx={{ backgroundColor: "#303030",color: "white",marginBottom:"7px"}}>
                <AccordionSummary expandIcon={<BsPlusLg color='white' size={25} rotate={30} />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{faqInfo.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography> {faqInfo.answer}</Typography>
                </AccordionDetails>
                </Accordion>
                 </div>
                  
              )})
          }
        </div>
  );
}