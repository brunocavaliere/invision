import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CarouselComponent from '../../components/Carousel';

import { ReactComponent as LogoGoogleImg } from '../../assets/logo-google.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background>
      <CarouselComponent />
    </Background>

    <Content>
      <a href="test">Invision</a>

      <h1>Getting Started</h1>

      <form>
        <Input
          label="Full Name"
          name="name"
          placeholder="Carolina Galvão dos Santos Zaglia"
          type="text"
        />

        <Input
          label="Users name or Email"
          name="name"
          placeholder="carolinagalvaosantos@gmail.com"
          type="text"
        />

        <Input
          label="Create Password"
          name="password"
          placeholder="Digite sua senha"
        />

        <Button type="submit">Sign In</Button>

        <div className="divider">Or</div>

        <button className="buttonGoogle" type="button">
          <LogoGoogleImg />
          Sign In with Google
        </button>

        <div>
          By signing up, you agree to <b>Invision</b>{' '}
          <a href="test">Terms of Conditions</a> and{' '}
          <a href="test">Privacy Policy</a>
        </div>

        <div>
          Already on <b>Invision</b>? <Link to="/">Log in</Link>
        </div>
      </form>
    </Content>
  </Container>
);

export default SignIn;
