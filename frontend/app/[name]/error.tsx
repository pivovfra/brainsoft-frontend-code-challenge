'use client';
import { ErrorComponent, ErrorProps } from '../components/errorComponent';
import React from 'react';

const Error: React.FC<ErrorProps> = ({ error }) => {
  return <ErrorComponent error={error} />;
};

export default Error;
