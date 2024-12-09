import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context';
import { logout } from '../../utils/auth';
import { Avatar, LanguageSelect, Button } from '../index';
import useAuth from '../../hooks/useAuth';
import styles from './AppBar.module.scss';
import { IoMdArrowBack } from 'react-icons/io';

interface AppBarProps {
    title: string;
    showBackButton: boolean;
}

const AppBar: React.FC<AppBarProps> = ({ title, showBackButton }) => {
    const { t, i18n } = useTranslation();
    const { language, setLanguage } = useContext(AppContext);
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/signIn');
    };

    const handleLanguageChange = (lng: 'pt' | 'en' | 'es') => {
        setLanguage(lng);
        i18n.changeLanguage(lng);
    };

    return (
        <header className={styles.container}>
            <div className={styles.leftContainer}>

                {showBackButton && (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={() => navigate(-1)}
                    >
                        <IoMdArrowBack size={24} />
                    </div>
                )}

                <div className={styles.title}>{title}</div>
            </div>

            <div className={styles.rightContent}>
                <LanguageSelect language={language as 'pt' | 'en' | 'es'} onChange={handleLanguageChange} />

                <Avatar user={user as { email: string | undefined; avatarUrl?: string | undefined } | null} />

                <Button onClick={handleLogout} disabled={false} style={{ height: '36px' }}>
                    {false ? 'Saindo...' : t('appBar.logout')}
                </Button>
            </div>
        </header>
    );
};

export default AppBar;