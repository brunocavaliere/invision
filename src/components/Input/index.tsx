import React, {
  InputHTMLAttributes,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dataTestid: string;
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({
  dataTestid,
  name,
  label,
  placeholder,
  type,
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} htmlFor={name}>
      {label}
      <input
        data-testid={dataTestid}
        defaultValue={defaultValue}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        type={type}
      />

      {error && <p data-testid="input-error">{error}</p>}
    </Container>
  );
};

export default Input;
