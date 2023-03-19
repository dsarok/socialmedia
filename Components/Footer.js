import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Footer() {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: '5%',
        alignItems: 'flex-start',
        borderRadius: 5,
      }}>

      <TouchableOpacity style={{alignItems: 'center',height:40,justifyContent:'space-between'}}>
        <AntDesign
          name="home"
          style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}
        />
        <Text style={{fontWeight:'100',fontSize:11}}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center',height:40,justifyContent:'space-between'}}>
        <MaterialCommunityIcons
          name="comment-question-outline"
          style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}
        />
        <Text style={{fontWeight:'100',fontSize:11}}>Ask</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center',height:40,justifyContent:'space-between'}}>
        <AntDesign
          name="search1"
          style={{color: 'black', fontSize: 20}}
        />
        <Text style={{fontWeight:'100',fontSize:11}}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center',height:40,justifyContent:'space-between'}}>
        <AntDesign name="user" style={{color: 'black', fontSize: 20}} />
        <Text style={{fontWeight:'100',fontSize:11}}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

function Box({emote, text}) {
  return (
    <TouchableOpacity style={{alignItems: 'center'}}>
      <View style={{marginVertical: 2}}>
        <Text>{emote}</Text>
      </View>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
