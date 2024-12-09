import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components';
import styles from './Home.module.scss';

const Home: React.FC = () => {

    const { t } = useTranslation();

    return (
        <Layout title={t('homePage.title')} showBackButton={false}>



        </Layout>
    );
};

export default Home;