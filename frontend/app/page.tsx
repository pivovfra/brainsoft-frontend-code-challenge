'use client';
import { ResultsBoard } from './components/resultsBoard';
import { Header } from './components/header';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from './components/errorComponent';

export default function Home() {
  return (
    <main>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <ResultsBoard />
      </ErrorBoundary>
    </main>
  );
}
