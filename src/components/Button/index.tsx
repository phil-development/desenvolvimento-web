import Button from '@mui/material/Button';
import React from 'react';

interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  className?: "";
};

const ButtonComponent: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      type="button"
      className={`general-button ${props.className ? props.className : ""}`}
      variant={props.variant}
      size={props.size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;