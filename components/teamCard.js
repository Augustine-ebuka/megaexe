"use client"
import React from 'react';
import Image from 'next/image';
import teamInfo from './teamData.json';
import Link from 'next/link';
import { IoLogoLinkedin } from 'react-icons/io';
import Carousel from 'react-elastic-carousel';
import '../styles/carousel.css'

export default function TeamCard() {
    const teamDetails = teamInfo.teams;
    const breakpoints = [
        {width: 1, itemsToShow:1},
        {width: 500, itemsToShow:3},
        {width: 760, itemsToShow:4},
        {width: 1200, itemsToShow:5},
    ]
    

  return (
      <>
          <Carousel breakPoints={breakpoints} outerSpacing={0}>
            {teamDetails.map((team) => (
                <div className="teamCard" key={team.id}>
                <div className="imageCover">
                    <Image src={`/teams/teamImage${team.id}.JPG`} alt="team" width={300} height={300} className="imageCard" />
                </div>
                <div className="cardTextCont">
                    <p className="my-4 font-bold" style={{fontSize:"16px"}}>{team.name}</p>
                    <p className="teamText">{team.description}</p>
                    <Link href={team.linkedin}><IoLogoLinkedin size={30} className="mt-1 cursor-pointer" /></Link>
                </div>
                </div>
            ))}
              
          </Carousel>
    </>
  );
}
