import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CarouselComponent from '../../components/Carousel';

import { ReactComponent as LogoGoogleImg } from '../../assets/logo-google.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background>
        <CarouselComponent />
      </Background>

      <Content>
        <a href="test">Invision</a>

        <h1>Welcome to Invision</h1>

        <form>
          <Input
            label="Users name or Email"
            name="name"
            placeholder="carolinagalvaosantos@gmail.com"
            type="text"
          />

          <Input
            label="Password"
            name="password"
            placeholder="Digite sua senha"
          />

          <a href="test">Forgot password?</a>

          <Button type="submit">Sign In</Button>

          <div className="divider">Or</div>

          <button className="buttonGoogle" type="button">
            <LogoGoogleImg />
            Sign In with Google
          </button>

          <div>
            New <b>Invision</b> <Link to="/register">Create Account</Link>
          </div>
        </form>
      </Content>
    </Container>
  );
};
export default SignIn;
