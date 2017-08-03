import * as React from 'react';
import './Button.css';

interface ButtonProps {
   className ?: string;
   type ?: string;
   text ?: string;
   onClick ?(e: React.FormEvent<HTMLButtonElement>): void;
}

export default (props: ButtonProps) => (
  <button
    className={props.className ? props.className : 'base-btn'}
    onClick={props.onClick}
    type={props.type}
  >
    {props.text}
  </button>
);
