import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components';

const Dashboard: React.FC = () => {

  const { t } = useTranslation();

  return (
    <Layout title={t('dashboardPage.title')} showBackButton={true}>



    </Layout>
  );
};

export default Dashboard;