import React from 'react'
import "../styles/Footer.css"
import banner from "../assets/banner.png"


import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='socialMediaContainer'>
                    <h3>Redes Socias</h3>
                    <div className='socialMedia'>
                        <InstagramIcon />
                        <TwitterIcon />
                        <FacebookIcon />
                        <LinkedInIcon />
                    </div>
                </div>
                <div>
                    <img className='bannerImg' src={banner} alt='imagem banner' />
                </div>

            </div>

        </>

    )
}

export default Footer