import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {

  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>{t('footer')}</p>
    </footer>
  );
};

export default Footer;