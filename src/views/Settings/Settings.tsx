import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components';

const Settings: React.FC = () => {

  const { t } = useTranslation();

  return (
    <Layout title={t('settingsPage.title')} showBackButton={true}>



    </Layout>
  );
};

export default Settings;