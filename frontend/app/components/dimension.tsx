import styles from './dimension.module.scss';
import React from 'react';

type DimensionProps = {
  label: string;
  value: string;
};

export const Dimension: React.FC<DimensionProps> = ({ label, value }) => {
  return (
    <div className={styles.container}>
      <h4>{label}</h4>
      <span>{value}</span>
    </div>
  );
};
