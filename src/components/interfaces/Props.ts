import { MouseEventHandler } from 'react';

export interface ButtonPropsInterface {
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
