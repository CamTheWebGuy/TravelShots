import React, { Fragment } from 'react'
import { Container, flexbox } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { FaUserPlus, FaSearch } from "react-icons/fa";
import { Input } from '@chakra-ui/react'

import "@fontsource/roboto";
import './Home.css'

import logo from '../assets/img/logo.png'



const Home = () => {
    return (
        <Fragment>
            <div className='hero'>

                <Container maxW='1200px'>

                    <header className='header'>
                        <div className='header_wrapper'>
                            <a href="/"><img src={logo} alt="Travel Shots" /></a>
                            <nav>
                                <Button className='login-btn' colorScheme='white' variant='link'>
                                    Login
                                </Button>
                                <Button className='ts_btn' colorScheme='blue' leftIcon={<FaUserPlus />}>Sign Up</Button>
                            </nav>
                        </div>

                        <div className='hero_content'>
                            <h1 className='hero_heading'>Explore The World From a Different Perspective.</h1>
                            <h3 className='hero_subheading'>Your #1 community for sharing travel photos and stories</h3>
                            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Input is className='hero_search' variant='filled' placeholder='Search For Travel Shots...' />
                                <Button className='ts_btn search_btn' colorScheme='blue' rightIcon={<FaSearch />}>Search</Button>
                            </div>
                        </div>

                    </header>


                </Container>
            </div>
            <div className='ts_categories'>
                <Container maxW='1200px'>
                    <div className="categories_heading">
                        <h2>Search By Catagories</h2>
                    </div>
                    <div className="ts_categories_options">
                        <a href='#' className="ts_option">
                            <img src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="Cruise Ship" />
                            <h3>Cruises</h3>
                        </a>
                        <a href='#' className="ts_option">
                            <img src="https://images.unsplash.com/photo-1595475218257-c04f46b25cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Waterway in Asia" />
                            <h3>Asia</h3>
                        </a>
                        <a href='#' className="ts_option">
                            <img src="https://images.unsplash.com/photo-1588064011404-57a7bc7133f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="United Kingdom - Big Ben" />
                            <h3>United Kingdom</h3>
                        </a>
                        <a href='#' className="ts_option">
                            <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="Concert" />
                            <h3>Events</h3>
                        </a>
                        <a href='#' className="ts_option">
                            <img src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="Giraffe" />
                            <h3>Africa</h3>
                        </a>
                        <a href='#' className="ts_option">
                            <img src="https://images.unsplash.com/photo-1535764558463-30f3af596bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Disneyland" />
                            <h3>Theme Parks</h3>
                        </a>
                    </div>
                </Container>
            </div>

            <div className="top_shots">
                <Container maxW='1200px'>
                    <h2>Explore The Top Travel Shots</h2>
                </Container>
            </div>

        </Fragment>

    )
}

export default Home
