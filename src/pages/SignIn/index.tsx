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

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Este campo não pode ser vazio')
          .email('O e-mail está incorreto'),
        password: Yup.string().min(
          6,
          'A senha não pode ter menos de 6 caracteres',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setIsLogged(true);
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);

      setIsLogged(false);
    }
  }, []);

  const handleModal = useCallback(() => {
    setIsLogged(!isLogged);
  }, [isLogged]);

  return (
    <>
      {isLogged && (
        <Modal data-testid="modal-signin">
          <div>
            <h2>Login realizado com sucesso!</h2>

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

          <h1>Welcome to Invision</h1>

          <Form data-testid="form-signin" ref={formRef} onSubmit={handleSubmit}>
            <Input
              dataTestid="input-email"
              label="Users name or Email"
              name="email"
              placeholder="carolinagalvaosantos@gmail.com"
              type="text"
            />

            <Input
              dataTestid="input-password"
              label="Password"
              name="password"
              placeholder="Digite sua senha"
              type="password"
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
          </Form>
        </Content>
      </Container>
    </>
  );
};
export default SignIn;
