import { useTranslation } from 'react-i18next';
import { AppBar } from '../../components';
import styles from './Settings.module.scss';

const Settings: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className={styles.container}>

      <AppBar title={t('settingsPage.title')} showBackButton={true}/>

    </div>
  );
};

export default Settings;