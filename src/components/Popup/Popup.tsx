import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Popup.module.scss';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  children?: React.ReactNode;
  autoCloseDuration?: number;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  message,
  children,
  autoCloseDuration
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      if (autoCloseDuration) {
        const id = setTimeout(() => {
          onClose();
        }, autoCloseDuration);
        setTimerId(id);
      }
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timerId) {
        clearTimeout(timerId);
        setTimerId(null);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isOpen, autoCloseDuration, timerId]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          <AiOutlineClose size={20} />
        </button>

        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>
          {message && <p>{message}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;