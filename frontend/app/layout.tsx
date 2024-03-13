'use client';
import { Inter } from 'next/font/google';
import './styles/globals.scss';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import React from 'react';
import { apolloCache } from './utils/cache';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    connectToDevTools: true,
    cache: apolloCache,
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
}
