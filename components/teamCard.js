"use client"
import React from 'react';
import Image from 'next/image';
import teamInfo from './teamData.json';
import Link from 'next/link';
import { IoLogoLinkedin } from 'react-icons/io';
import '../styles/carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TeamCard() {
    const teamDetails = teamInfo.teams;
    const breakpoints = [
        {width: 1, itemsToShow:1},
        {width: 500, itemsToShow:3},
        {width: 760, itemsToShow:4},
        {width: 1200, itemsToShow:5},
    ]
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
      <>
          <Slider {...settings}>
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
              
          </Slider>
    </>
  );
}
