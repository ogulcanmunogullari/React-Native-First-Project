import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import Main from './components/Main';
import Footer from './components/Footer';
export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(19, 19, 19)', flex: 1}}>
      <Header />
      <Card />
      <Main />
      <Footer />
    </SafeAreaView>
  );
}
