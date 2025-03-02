import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HelloWorld } from './components/HelloWorld'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';



function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <HelloWorld />
    </ChakraProvider>
  );
}

export default App;
