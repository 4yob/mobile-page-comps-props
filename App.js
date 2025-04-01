import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Alejandra Barros"/>
      <Card text="Atividade 09"/>
      <Card text="Página com componentes com props"/>
      <Footer text="2TDS1"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});