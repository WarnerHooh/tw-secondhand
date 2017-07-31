import * as React from 'react';


interface ButtonProps {
   classStr?: string,
   handleClick?: any,
   text?: string
}

export default (props: ButtonProps) => (
  <button className={props.classStr} onClick={props.handleClick} value={props.text} />
);
