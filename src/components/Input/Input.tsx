import * as React from 'react';
import './Input.css';

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

export default (props: InputProps) => (
  <input
    type={props.type}
    placeholder={props.placeholder}
    className={'component-input ' + props.className}
    onChange={props.onChange}
  />
);
