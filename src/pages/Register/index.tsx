import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CarouselComponent from '../../components/Carousel';

import { ReactComponent as LogoGoogleImg } from '../../assets/logo-google.svg';

import { Modal, Container, Content, Background } from './styles';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Este campo não pode ser vazio'),
        email: Yup.string()
          .required('Este campo não pode ser vazio')
          .email('Digite um email válido.'),
        password: Yup.string().min(
          6,
          'A senha não pode ter menos de 6 caracteres',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setIsRegistered(true);
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);

      setIsRegistered(false);
    }
  }, []);

  const handleModal = useCallback(() => {
    setIsRegistered(!isRegistered);
  }, [isRegistered]);

  return (
    <>
      {isRegistered && (
        <Modal data-testid="modal-register">
          <div>
            <h2>Cadastro realizado com sucesso!</h2>

            <Button onClick={handleModal}>Voltar</Button>
          </div>
        </Modal>
      )}

      <Container>
        <Background>
          <CarouselComponent />
        </Background>

        <Content>
          <a href="test">Invision</a>

          <h1>Getting Started</h1>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              dataTestid="input-name"
              label="Full Name"
              name="name"
              placeholder="Carolina Galvão dos Santos Zaglia"
              type="text"
            />

            <Input
              dataTestid="input-email"
              label="Users name or Email"
              name="email"
              placeholder="carolinagalvaosantos@gmail.com"
              type="text"
            />

            <Input
              dataTestid="input-password"
              label="Create Password"
              name="password"
              placeholder="Digite sua senha"
              type="password"
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
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Register;
