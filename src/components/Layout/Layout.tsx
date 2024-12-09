import React from 'react';
import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

interface LayoutProps {
    title: string;
    showBackButton?: boolean;
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, showBackButton = false, children }) => {
    return (
        <div className={styles.container}>
            <AppBar title={title} showBackButton={showBackButton} />
            <main className={styles.content}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;