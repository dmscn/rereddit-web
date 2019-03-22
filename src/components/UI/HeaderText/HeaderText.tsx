import React from 'react';
import styles from './HeaderText.module.css';

export interface Props {
  children: any;
}

export default function HeaderText({ children }: Props): JSX.Element {
  return <p className={styles.HeaderText}>{children}</p>;
}
