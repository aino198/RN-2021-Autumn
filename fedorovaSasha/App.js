import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text
} from 'react-native';

const App: () => Node = () => {

  return (
    <SafeAreaView>
      <Text>Hello world!</Text>
    </SafeAreaView>
  );
};


export default App;