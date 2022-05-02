import React from 'react';
import {View, Text} from 'react-native';
import Selection from './Selection/Selection';
import Header_Style from './Header_Style';

export default function Header() {
  return (
    <View style={Header_Style.H_Container}>
      <View style={Header_Style.H_Center}>
        <Selection title={' '} />
        <Selection title={'2'} />
        <Selection title={'3'} />
      </View>
      <View>
        <Text style={{fontSize:16, color:'white', marginTop: 20}}>Design your virtual card</Text>
      </View>
    </View>
  );
}
