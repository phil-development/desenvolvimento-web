import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  language: string;
}

const Input: React.FC<InputProps> = ({ label, language, ...rest }) => {
  return (
    <div className={styles.input_group}>
      <label htmlFor={rest.id}>{label}</label>
      <input className={`${styles.input} ${language}`} {...rest} />
    </div>
  );
};

export default Input;