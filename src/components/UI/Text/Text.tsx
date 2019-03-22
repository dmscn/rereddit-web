import React from 'react';
import styles from './Text.module.css';

export interface Props {
  children: any;
  variant?: 'dialog' | 'header' | 'content';
}

export default function HeaderText({
  children,
  variant = 'content',
}: Props): JSX.Element {
  return <p className={styles[variant]}>{children}</p>;
}
