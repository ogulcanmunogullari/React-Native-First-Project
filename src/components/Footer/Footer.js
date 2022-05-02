import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Footer() {
  return (
    <View>
      <View style={{padding:15}}>
        <Text style={{color: 'grey'}}>
          Dont worry. You can always change the design of
        </Text>
        <Text style={{color: 'grey'}}>
          your virtual card later. Just enter the settings.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginRight: 20,
          marginLeft: 20,
          marginBottom: 40,
          padding: 15,
          backgroundColor: 'white',
          borderRadius: 15,
        }}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
