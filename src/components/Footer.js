import React from 'react'
import { Container } from '@chakra-ui/react'

import logo from '../assets/img/logo.png'

function Footer() {
    return (
        <div>
            <footer className='ts_footer'>
                <Container maxW='1200px'>
                    <div className="footer_wrapper">
                        <div className="brand">
                            <a href="/"><img src={logo} alt="Travel Shots" /></a>
                            <p>Travel Shots is your guide to the world! We are a travel photo-sharing community created by travelers who love to share their passion for travel. </p>
                        </div>
                        <div className="copyright">
                            &copy; Copyright 2022 - Travel Shots - Designed by CamTheWebGuy
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
