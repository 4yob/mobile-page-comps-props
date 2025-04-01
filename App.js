import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Alejandra Barros"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});