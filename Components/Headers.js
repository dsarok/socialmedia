import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';

export default function Headers() {
  return (
    <View style={styles.container}>
      
      <View style={styles.avatarBox}>
        <Image
          source={{uri: 'https://i.pravatar.cc/300'}}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder={'Ask a question'}
          placeholderTextColor={'white'}
        />
        <Text style={{position:'relative',right:27}}>🖼</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#283072',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom:8
  },
  heading: {
    fontSize: 14,
    fontWeight: 700,
    color: 'white',
  },
  avatarBox: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems:'center'
  },
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 19,
  },
  textInputStyle: {
    borderColor: 'white',
    width: '90%',
    borderRadius: 6,
    backgroundColor:
      'rgba(255, 255, 255, 0.2)',
    marginStart: 4,
    paddingLeft:10,
    fontWeight:'600',
    fontSize:10,
    height:30
  },
});
