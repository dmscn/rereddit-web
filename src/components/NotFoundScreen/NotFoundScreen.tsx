import React from 'react';

import logo from '../../assets/svg/logo-mini.svg';
import styles from './NotFoundScreen.module.css';
import HeaderText from '../UI/HeaderText';

export default function NotFoundScreen() {
  return (
    <main className={styles.Container}>
      <img src={logo} />
      <HeaderText>Wrong path, pal...</HeaderText>
    </main>
  );
}
