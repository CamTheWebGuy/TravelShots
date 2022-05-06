import React from 'react';
import { Container, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../contexts/AuthContext';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

import logo from '../assets/img/logo.png';
import './Register.css';

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-X])/;
const numericRegex = /(?=.*[0-9])/;

const formSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Please provide a valid email'),
  password: Yup.string()
    .matches(lowercaseRegex, 'Password must contain lowercase letter')
    .matches(uppercaseRegex, 'Password must contain uppercase letter')
    .matches(numericRegex, 'Password must contain a number')
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});

function Register() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    signup('cam@cam.com', 'password');
  }
  return (
    <div className="ts_register_hero">
      <Container style={{ margin: '0 auto', maxWidth: '28%' }} maxW="1200px">
        <img
          className="pointer"
          onClick={() => navigate('/')}
          src={logo}
          alt=""
        />
        <div className="ts_register">
          <h1>Create An Account</h1>
          <br />

          <Formik
            initialValues={{
              email: '',
              name: '',
              password: '',
            }}
            validationSchema={formSchema}
            onSubmit={values => {
              console.log(values);
            }}
            render={({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
            }) => (
              <Form onSubmit={handleSubmit}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    type="email"
                  />
                  {errors.email && touched.email && (
                    <p className="form-error">{errors.email}</p>
                  )}
                </FormControl>
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                    type="text"
                  />
                  {errors.name && touched.name && (
                    <p className="form-error">{errors.name}</p>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    type="password"
                  />
                  {errors.password && touched.password && (
                    <p className="form-error">{errors.password}</p>
                  )}
                </FormControl>
                <br />

                <Button
                  type="submit"
                  style={{ color: 'white' }}
                  className="ts_btn"
                  isFullWidth={true}
                  rightIcon={<FaChevronRight />}
                >
                  Sign Up
                </Button>
                <p style={{ marginTop: '5px' }}>
                  Already a member?{' '}
                  <button
                    style={{ color: '#3498DB' }}
                    onClick={() => navigate('/signin')}
                  >
                    <u>Sign In</u>
                  </button>
                </p>
              </Form>
            )}
          />
        </div>
      </Container>
    </div>
  );
}

export default Register;
