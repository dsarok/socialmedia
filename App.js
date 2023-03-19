/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, SafeAreaView, StatusBar, View} from 'react-native';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Headers from './Components/Headers';
import ParentHeader from './Components/ParentHeader';

function App() {
  const data = [
    {
      imageUrl: 'https://picsum.photos/200/300',
      profileUrl: 'https://i.pravatar.cc/300',
      name: 'charlotte amelia',
      time: '5 min',
      description:
        'Lorem ipsum is simply dummy text the printing and typesetting industry and this is what i am targetting text the printing and typeset',
    },
    {
      // imageUrl: 'https://picsum.photos/200/300',
      profileUrl: 'https://i.pravatar.cc/300',
      name: 'kamelie amelia',
      time: '2 day ago',
      description:
        'Lorem ipsum is simply dummy text the printing and typeset industry and this is what i am targetting text the printing and typeset',
    },
    {
      imageUrl: 'https://picsum.photos/200/300',
      profileUrl: 'https://i.pravatar.cc/300',
      name: 'Ramesh amelia',
      time: '5 month ago',
      description:
        'Lorem ipsum is simply dummy text the printing and typeset industry and this is what i am targetting text the printing and typeset',
    }
  ];
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor: '#283072'}}>
        <ParentHeader />
      </SafeAreaView>
      <Headers profilePic={'https://i.pravatar.cc/300'} />
      <View style={{paddingHorizontal: '5%', flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Card
              imageUrl={item.imageUrl}
              profileUrl={item.profileUrl}
              name={item.name}
              description={item.description}
              time={item.time}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer />
    </>
  );
}

export default App;
