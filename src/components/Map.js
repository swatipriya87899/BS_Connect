import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {color} from '../assets/color';
import Bottombar from './Bottombar';

const Map = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        initialRegion={{
          latitude: 12.9904,
          longitude: 80.2357,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        <Marker
          coordinate={{latitude: 12.99, longitude: 80.236}}
          title="Custom Marker"
          description="This is a custom marker"
          image={require('./../images/userMaker.png')}
        />

        <Marker
          coordinate={{latitude: 12.9919963, longitude: 80.2342791}}
          title="Custom Marker"
          description="This is a custom marker"
          image={require('./../images/friend1.png')}
        />

        <Marker
          coordinate={{latitude: 29.1043, longitude: 75.1655}}
          title="Custom Marker"
          description="This is a custom marker"
          image={require('./../images/friend1.png')}
        />
      </MapView>
      {/* <View style={styles.bottombar}>
        <Bottombar navigation={navigation} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bottombar: {
    position: 'absolute',
    // bottom: 0,
    // backgroundColor: color.helperColor,
    flex: 1,
    // width: '100%',
    // zIndex: 3,
    // paddingTop: 10,
  },
});

export default Map;
