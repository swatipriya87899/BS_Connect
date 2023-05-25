import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Map from '../components/Map';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';

export default function NearbyFriends() {
  return (
    <>
    <View style={styles.nearbyFriends}> 
      <Header/>
    </View>
    <Map/>
    <View style={styles.searchbox}><Searchbox title="Search Friends..."/></View>
    </>
  )
}

const styles=StyleSheet.create({
  nearbyFriends:{
    marginTop: 20,
    marginHorizontal: 20,
  },
  searchbox:{
    position:'absolute',
    top:60,
    left:20
  }
})