import * as React from 'react';
import './Button.css';

interface ButtonProps {
   className ?: string;
   onClick ?: () => void;
   text ?: string;
}

export default (props: ButtonProps) => (
  <button
    className={props.className ? props.className : 'base-btn'}
    onClick={props.onClick}
  >
    {props.text}
  </button>
);
