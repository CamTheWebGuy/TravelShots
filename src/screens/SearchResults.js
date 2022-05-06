import React, { Fragment } from 'react';
import {
  FaUserPlus,
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
import './SearchResults.css';

import logo from '../assets/img/logo.png';
import TopShotsItem from '../components/TopShotsItem';
import TopAlbumItem from '../components/TopAlbumItem';
import Footer from '../components/Footer';

function SearchResults() {
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
                  leftIcon={<FaUserPlus />}
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

            <h3 className="sr_search_query">
              Search Results <span className="sr_query">"London"</span>
            </h3>
            <Divider className="header_divider" />
          </header>
        </Container>
      </div>
      <div className="sr_top">
        <Container maxW="1200px">
          <div className="sr_heading">
            <h2>
              Top Photos in <span className="sr_query">"London"</span>
            </h2>
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
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
            <TopShotsItem
              link="#"
              authorName="Josh Monte"
              likes="1,473"
              authorAvatar="https://bit.ly/dan-abramov"
              img="https://images.unsplash.com/photo-1528041119984-da3a9f8d04d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80"
            />
          </div>
        </Container>
      </div>

      <div className="sr_top">
        <Container maxW="1200px">
          <div className="sr_heading">
            <h2>
              Top Albums in <span className="sr_query">"London"</span>
            </h2>
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

export default SearchResults;
