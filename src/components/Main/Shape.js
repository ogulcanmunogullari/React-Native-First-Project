import React from 'react';
import {View, Text} from 'react-native';
import style from './Main_Style';

export default function Shape() {
  return (
    <View>
      <Text style={style.Text}>Add shapes</Text>
      <View style={style.Box_Container}>
        <View style={style.Box} />
        <View style={style.Box} />
        <View style={style.Box} />
        <View style={style.Box} />
        <View style={style.Box} />
      </View>
    </View>
  );
}
