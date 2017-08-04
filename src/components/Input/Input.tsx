import * as React from 'react';
import './Input.css';

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  accept?: string;
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
}

export default (props: InputProps) => (
  <input
    id={props.id}
    type={props.type}
    placeholder={props.placeholder}
    className={'component-input ' + props.className}
    accept={props.accept}
    onChange={props.onChange}
  />
);
