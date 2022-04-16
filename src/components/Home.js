import React, { Fragment } from 'react'
import { Container } from '@chakra-ui/react'
import { FaUserPlus, FaSearch } from "react-icons/fa";
import { Input, Button, Divider } from '@chakra-ui/react'

import "@fontsource/roboto";
import './Home.css'

import logo from '../assets/img/logo.png'
import TopShotsItem from './TopShotsItem';
import CategoryItem from './CategoryItem';
import Footer from './Footer';



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
                        <Divider className='header_divider' />

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
                        <CategoryItem link='#' title='Cruises' img='https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' />
                        <CategoryItem link='#' title='Asia' img='https://images.unsplash.com/photo-1595475218257-c04f46b25cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                        <CategoryItem link='#' title='United Kingdom' img='https://images.unsplash.com/photo-1588064011404-57a7bc7133f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
                        <CategoryItem link='#' title='Events' img='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
                        <CategoryItem link='#' title='Africa' img='https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' />
                        <CategoryItem link='#' title='Theme Parks' img='https://images.unsplash.com/photo-1535764558463-30f3af596bee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
                    </div>
                </Container>
            </div>

            <div className="top_shots">
                <Container maxW='1200px'>
                    <h2>Explore The Top Travel Shots</h2>
                    <div className="top_shots_gallery">
                        <TopShotsItem link='#' authorName='Josh Monte' likes='1,473' authorAvatar='https://bit.ly/dan-abramov' img='https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80' />
                        <TopShotsItem link='#' authorName='Kate Miller' likes='1,327' authorAvatar='https://randomuser.me/api/portraits/women/45.jpg' img='https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                        <TopShotsItem link='#' authorName='Tracy Rose' likes='1,201' authorAvatar='https://randomuser.me/api/portraits/women/64.jpg' img='https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                        <TopShotsItem link='#' authorName='Sue Robertson' likes='987' authorAvatar='https://randomuser.me/api/portraits/women/27.jpg' img='https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
                        <TopShotsItem link='#' authorName='Jason Todd' likes='923' authorAvatar='https://randomuser.me/api/portraits/men/73.jpg' img='https://images.unsplash.com/photo-1543832923-44667a44c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80' />
                        <TopShotsItem link='#' authorName='Josh Monte' likes='714' authorAvatar='https://bit.ly/dan-abramov' img='https://images.unsplash.com/photo-1568548655200-b91935d692ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                        <TopShotsItem link='#' authorName='Christina Henry' likes='600' authorAvatar='https://randomuser.me/api/portraits/women/87.jpg' img='https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' />
                        <TopShotsItem link='#' authorName='Martin Owens' likes='547' authorAvatar='https://randomuser.me/api/portraits/men/63.jpg' img='https://images.unsplash.com/photo-1599027619757-d2a6c129e388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
                    </div>
                </Container>
            </div>

            <Footer />

        </Fragment>

    )
}

export default Home
