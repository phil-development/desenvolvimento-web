import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth';
import { Button } from '../../components';

import styles from './Home.module.scss';

const Home: React.FC = () => {
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setLoading(true);
        await logout();
        setLoading(false);
        navigate('/signIn')
    };


    return (
        <div className={styles.container}>

            <section className={styles.content}>

                <Button onClick={handleLogout} disabled={loading}>
                    {loading ? 'Saindo...' : 'Sair'}
                </Button>

            </section>

        </div>
    );
};

export default Home