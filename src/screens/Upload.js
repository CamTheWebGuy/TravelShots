import React, { Fragment } from 'react';
import {
  FaUpload,
  FaSearch,
  FaChevronDown,
  FaFileImage,
  FaImages,
} from 'react-icons/fa';
import {
  Container,
  Input,
  Button,
  Divider,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import '@fontsource/roboto';
import './Upload.css';

import logo from '../assets/img/logo.png';
import Footer from '../components/Footer';

function Upload() {
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

          <div className="upload_card">
            <h1>What Would You Like To Upload?</h1>
            <div className="upload_options">
              <div className="upload_photo pointer">
                <FaFileImage style={{ width: '100%' }} />
                <h2>A Photo</h2>
              </div>
              <div className="upload_album pointer">
                <FaImages style={{ width: '100%' }} />
                <h2>An Album</h2>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Upload;
