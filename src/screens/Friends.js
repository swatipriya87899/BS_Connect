import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import {color} from '../assets/color';
import Card_Group from '../components/Card_Group';
import Sub_Heading from '../components/Sub_Heading';
import Connection_Group from '../components/Connection_Group';
import { ScrollView } from 'react-native-gesture-handler';
import Bottombar from '../components/Bottombar';

export default function Friends({navigation}) {
  return (
    <View style={styles.friends}>
      <Header />

      <View style={styles.bottombar}>
        <Bottombar navigation={navigation}/>
      </View>

      <ScrollView>
      <Searchbox />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Sub_Heading type="Nearby Friends" />
        <Sub_Heading type="Connection Request" />
      </View>
      <Card_Group />
      <Sub_Heading type="Your Connections" />
      <Connection_Group/>
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
    bottom: -10,
    backgroundColor: color.helperColor,
    flex: 1,
    width: 400,
    zIndex: 3,
    paddingTop: 10,
  },
});
