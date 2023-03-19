import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ParentHeader() {
  return (
    <View
    style={{
      paddingHorizontal: '5%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      height: 35
    }}>
    <View>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: 'white',
          marginTop: 10,
        }}>
        Unsweetened Beauty
      </Text>
    </View>
    <View style={{flexDirection: 'row',justifyContent:'flex-end'}}>
      <TouchableOpacity
        style={{
          borderWidth: 2,
          borderColor: 'white',
          width:22,
          marginRight:10,
          alignItems:'center',
          borderRadius:20
        }}>
        <Text style={{fontSize:12,fontWeight:'bold'}}>❓</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:"center"}}>
        <Text style={{fontSize:14}}>🔔</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}