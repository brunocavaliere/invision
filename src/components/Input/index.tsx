import React, { InputHTMLAttributes, useState } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, placeholder, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} htmlFor={name}>
      {label}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        id={name}
        placeholder={placeholder}
        type={type}
      />
    </Container>
  );
};

export default Input;
