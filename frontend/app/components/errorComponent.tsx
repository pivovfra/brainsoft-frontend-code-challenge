'use client';
import React from 'react';
import styles from './errorComponent.module.scss';

export type ErrorProps = {
  error: Error;
  hideButton?: boolean;
};

export const ErrorComponent: React.FC<ErrorProps> = ({
  error,
  hideButton = false,
}) => {
  return (
    <div className={styles.centerError}>
      <h1>{error.message}</h1>
      {!hideButton && (
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload page
        </button>
      )}
    </div>
  );
};
