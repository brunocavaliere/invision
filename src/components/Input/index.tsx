import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, placeholder, type }) => (
  <Container htmlFor={name}>
    {label}
    <input id={name} placeholder={placeholder} type={type} />
  </Container>
);

export default Input;
