import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: '5%',
        alignItems:'flex-start',
        borderRadius:5
      }}>
      <Box emote={'🏠'} text={'Home'} />
      <Box emote={'💬 '} text={'Ask'} />
      <Box emote={'🔍'} text={'Search'} />
      <Box emote={'👤'} text={'Profile'} />
    </View>
  );
}

function Box({emote, text}) {
  return (
    <TouchableOpacity
      style={{alignItems: 'center'}}>
      <View style={{marginVertical: 2}}>
        <Text>{emote}</Text>
      </View>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
