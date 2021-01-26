import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CarouselComponent from '../../components/Carousel';

import { ReactComponent as LogoGoogleImg } from '../../assets/logo-google.svg';

import { Container, Content, Background } from './styles';

interface ErrorsProps {
  setErrors(errors: object): void;
}

const Register: React.FC = () => {
  const formRef = useRef<ErrorsProps>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email(),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      formRef.current?.setErrors({
        name: 'Nome obrigatório',
      });
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background>
        <CarouselComponent />
      </Background>

      <Content>
        <a href="test">Invision</a>

        <h1>Getting Started</h1>

        <form onSubmit={handleSubmit}>
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
};

export default Register;
