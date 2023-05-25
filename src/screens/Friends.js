import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import {color} from '../assets/color';
import Card_Group from '../components/Card_Group';
import Sub_Heading from '../components/Sub_Heading';
import Connection_Group from '../components/Connection_Group';
import { ScrollView } from 'react-native-gesture-handler';
import Bottombar from '../components/Bottombar';
import { useDispatch } from 'react-redux';
import { nearbyFriends } from '../store/reducers/statusControl';
import { connectRequest } from '../store/reducers/statusControl';
import { useSelector } from 'react-redux';

export default function Friends({navigation}) {

  const showAlert = () => {
    Alert.alert(
      'Sorry Buddy😔',
      'There is not connection Request for you',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK button pressed'),
        },
      ],
      { cancelable: false }
    );
  };


  const dispatch= useDispatch();

  const nearby=useSelector(state=>state.control.nearbyFriends)

  return (
    <View style={styles.friends}>
      <Header />

      <View style={styles.bottombar}>
        <Bottombar navigation={navigation}/>
      </View>

      <ScrollView>
      <Searchbox title="Search Friends..."/>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={()=>dispatch(nearbyFriends)}><Sub_Heading type="Nearby Friends" hr={true}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>showAlert()}><Sub_Heading type="Connection Request" hr={false} /></TouchableOpacity>

      </View>

      {nearby && <Card_Group />}
      <Sub_Heading type="Your Connections" />
      <Connection_Group navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  friends: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: color.helperColor,
    // flex:1
  },

  bottombar: {
    position: 'absolute',
    bottom: -80,
    backgroundColor: color.helperColor,
    // flex: 1,
    width: 400,
    height:90,
    zIndex: 3,
    paddingTop: 10,
  },
});
