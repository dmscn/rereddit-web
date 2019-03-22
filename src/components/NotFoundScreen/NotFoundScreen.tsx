import React from 'react';

import logo from '../../assets/svg/logo-mini.svg';
import styles from './NotFoundScreen.module.css';
import Text from '../UI/Text';

export default function NotFoundScreen() {
  return (
    <main className={styles.Container}>
      <img src={logo} />
      <Text variant={'dialog'}>Oops! Wrong path, pal...</Text>
    </main>
  );
}
