import React, { Fragment } from 'react';
import {
  FaUserPlus,
  FaUpload,
  FaSearch,
  FaChevronDown,
  FaChevronCircleRight,
} from 'react-icons/fa';
import {
  Container,
  Input,
  Button,
  Divider,
  Avatar,
  AvatarGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import '@fontsource/roboto';
import './Profile.css';

import logo from '../assets/img/logo.png';
import TopShotsItem from '../components/TopShotsItem';
import TopAlbumItem from '../components/TopAlbumItem';
import Footer from '../components/Footer';

function Profile() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div>
        <Container maxW="1200px">
          <header className="header">
            <div className="header_wrapper">
              <span onClick={() => navigate('/')}>
                <img className="pointer" src={logo} alt="Travel Shots" />
              </span>

              <div className="sr_search_bar">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaSearch />}
                  />
                  <Input
                    className="hero_search"
                    variant="filled"
                    placeholder="Search For Travel Shots..."
                  />
                </InputGroup>
              </div>
              <nav className="user_nav_menu">
                <Button
                  className="ts_btn"
                  onClick={() => navigate('/upload')}
                  colorScheme="blue"
                  leftIcon={<FaUpload />}
                >
                  Upload Photos
                </Button>

                <Menu>
                  <MenuButton
                    className="user_menu_toggle"
                    as={Button}
                    rightIcon={<FaChevronDown />}
                  >
                    <div className="user_info">
                      <Avatar
                        size="sm"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                      <h3>Ryan Chambers</h3>
                    </div>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>My Uploads</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </nav>
            </div>

            <Divider className="header_divider" />
          </header>
        </Container>
      </div>

      <div className="profile_user_info">
        <Container maxW="1200px">
          <img
            className="profile_banner"
            src="https://images.unsplash.com/photo-1596627116790-af6f46dddbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="profile_user_wrapper">
            <Avatar
              className="profile_pic"
              size="2xl"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />

            <div className="profile_user_details">
              <h2>Ryan Chambers</h2>
              <p>
                <em>Rome, Italy</em>
              </p>
              <p style={{ paddingTop: 8 }}>
                My Name is Ryan, I’m a hobbist photographer based in Rome,
                Italy! In my free time I like to travel around the city and take
                pictures of the sights.
              </p>
            </div>
            <Button
              className="ts_btn"
              style={{ marginTop: 20, paddingLeft: 25, paddingRight: 25 }}
              onClick={() => navigate('/upload')}
              colorScheme="blue"
              leftIcon={<FaUserPlus />}
            >
              Follow Ryan
            </Button>
          </div>
        </Container>
      </div>

      <div className="sr_top">
        <Container maxW="1200px">
          <div className="sr_heading">
            <h2>Ryan's Photos</h2>
            <Button
              className="ts_btn"
              style={{ alignSelf: 'flex-end' }}
              onClick={() => navigate('/upload')}
              colorScheme="blue"
              rightIcon={<FaChevronCircleRight />}
            >
              View All
            </Button>
          </div>
          <div className="ts_categories_options">
            <TopAlbumItem
              link="#"
              authorName="Josh Monte"
              album="London Museums"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopAlbumItem
              link="#"
              authorName="Josh Monte"
              album="London Museums"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopAlbumItem
              link="#"
              authorName="Josh Monte"
              album="London Museums"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopAlbumItem
              link="#"
              authorName="Josh Monte"
              album="London Museums"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopAlbumItem
              link="#"
              authorName="Josh Monte"
              album="London Museums"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopAlbumItem
              link="#"
              authorName="Josh Monte"
              album="London Museums"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
          </div>
        </Container>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Profile;
