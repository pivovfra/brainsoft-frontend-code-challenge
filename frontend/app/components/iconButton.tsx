import React from 'react';
import ListIcon from '../../public/lines-svgrepo-com.svg';
import GridIcon from '../../public/grid-small-svgrepo-com.svg';
import Image from 'next/image';
import styles from './iconButton.module.scss';

type IconButtonProps = {
  variant: 'list' | 'grid';
  onClick: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({ variant, onClick }) => {
  const iconSrc = variant === 'list' ? ListIcon : GridIcon;
  return (
    <button className={styles.button} onClick={onClick}>
      <Image priority width={24} height={24} src={iconSrc} alt={variant} />
    </button>
  );
};
