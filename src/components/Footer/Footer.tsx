import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Conteúdo do footer */}
      <p>© 2023 Meu Site. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;