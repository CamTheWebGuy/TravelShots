import { Container, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
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

function Signin() {
  const navigate = useNavigate();
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
          <h1>Sign In To Your Account</h1>
          <br />

          <Formik
            initialValues={{
              email: '',
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
                  Login
                </Button>
                <p style={{ marginTop: '5px' }}>
                  Not Registered Yet?{' '}
                  <button
                    style={{ color: '#3498DB' }}
                    onClick={() => navigate('/register')}
                  >
                    <u>Sign Up</u>
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

export default Signin;
