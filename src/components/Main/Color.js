import React from 'react';
import {View, Text} from 'react-native';
import style from './Main_Style';

export default function Color() {
  return (
    <View>
      <Text style={style.Text}>Select color</Text>
      <View style={style.Box_Container}>
        <View style={style.BoxBlue} />
        <View style={style.BoxPurple} />
        <View style={style.BoxYellow} />
        <View style={style.BoxRed} />
        <View style={style.BoxLightBlue} />
      </View>
    </View>
  );
}
