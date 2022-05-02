import React from 'react';
import {View, Text} from 'react-native';
import style from './Card_Style';

export default function Card() {
  return (
    <View style={style.Container}>
      <View style={style.Card}>
        <View style={style.Box_Container}>
          <View style={style.Box}></View>
          <View style={style.Box}></View>
        </View>
        <View style={style.Text_Container}>
          <View>
            <Text style={style.Text_B}>$9,999</Text>
          </View>
          <View>
            <Text style={style.Text_S}>****99999</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
