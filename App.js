import React from 'react';
import Routes from './src/routes';
import { ChallengesProvider } from './src/contexts/ChallengesContexts';

export default function App() {

  return (
    <ChallengesProvider>
      <Routes />
    </ChallengesProvider>
  );
}
