import React from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './Avatar.module.scss';
import { Link } from 'react-router-dom';

interface AvatarProps {
  user: {
    email: string | undefined;
    avatarUrl?: string;
  } | null;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className={styles.container}>
      <Link to="/settings">
        {user?.avatarUrl ? (
          <img src={user.avatarUrl} alt={`${user.email}'s avatar`} />
        ) : (
          <div className={styles.wrapper}>
            <FaUser />
          </div>
        )}
      </Link>
    </div>
  );
};

export default Avatar;