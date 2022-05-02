import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Header_Style from '../Header_Style';

export default function Selection(props) {
  return props.title === '2' ? (
    <TouchableOpacity style={Header_Style.H_B_Selected}>
      <Text style={Header_Style.T_Selected}>{props.title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={Header_Style.H_B_N_Selected}>
      <Text style={Header_Style.T_N_Selected}>{props.title} </Text>
    </TouchableOpacity>
  );
}
