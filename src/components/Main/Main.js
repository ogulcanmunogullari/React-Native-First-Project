import React from 'react';
import {View} from 'react-native';
import Shape from './Shape';
import Color from './Color';
import style from '../Main/Main_Style';

export default function Main() {
  return (
    <View style={style.Container}>
      <Color />
      <Shape />
    </View>
  );
}
