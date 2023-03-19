import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Card({profileUrl, imageUrl, name, time, description}) {
  return (
    <View style={{marginTop: 10}}>
      <View style={styles.profile}>
        <Image source={{uri: profileUrl}} style={styles.imageStyle} />
        <View style={{justifyContent: 'space-around', marginBottom: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 11}}>{name}</Text>
          <Text style={{fontWeight: '100', fontSize: 10}}>{time}</Text>
        </View>
      </View>
      <Text numberOfLines={2} style={{fontSize: 12}}>
        {description}
      </Text>
      <View style={{borderBottomWidth: 0.5, borderColor: '#D7D7D7'}}>
        <Image
          source={{uri: imageUrl}}
          style={{
            height: 200,
            width: '100%',
            marginVertical: 15,
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          height: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:"center"}}>
          <MaterialCommunityIcons
            name="cards-heart-outline"
            style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}
          />
          <Text style={{fontSize: 11, fontWeight: '700'}}> Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:"center"}}>
          <MaterialCommunityIcons
            name="comment-text-outline"
            style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}
          />
          <Text style={{fontSize: 11, fontWeight: '700'}}> Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:"center"}}>
        <MaterialCommunityIcons
            name="share-variant-outline"
            style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}
          />
          <Text style={{fontSize: 11, fontWeight: '700'}}> Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',alignItems:"center"}}>
          <MaterialCommunityIcons
            name="bookmark-outline"
            style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}
          />
          <Text style={{fontSize: 11, fontWeight: '700'}}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 10,
  },
});
