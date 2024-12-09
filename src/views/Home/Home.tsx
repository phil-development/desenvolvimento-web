import { useTranslation } from 'react-i18next';
import { Layout } from '../../components';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Layout title={t('homePage.title')} showBackButton={false}>

            <section className={styles.details}>

                <div className={styles.babyDetails}>

                </div>
                <div className={styles.detailsPainel}>

                </div>
                <div className={styles.detailsPainel}>

                </div>
                <div className={styles.detailsPainel}>

                </div>

            </section>

        </Layout>
    );
};

export default Home;