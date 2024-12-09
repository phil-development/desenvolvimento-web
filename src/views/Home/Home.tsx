import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar } from '../../components';
import styles from './Home.module.scss';

const Home: React.FC = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.container}>

            <AppBar title={t('homePage.title')} showBackButton={false}/>

        </div>
    );
};

export default Home