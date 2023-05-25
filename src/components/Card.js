import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,useState} from 'react-native';
import React from 'react';
import {color} from '../assets/color';
import Button from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { removeNearbyFriends } from '../store/reducers/friend';

const Card = ({name,level,id, image}) => {

  const dispatch=useDispatch();


  const handleCrossIconPress = (id) => {
    dispatch(removeNearbyFriends(id))
  };

  return (
    <View style={styles.card}>
      <View style={{position: 'absolute', right: 10, top: 10}}>
        <TouchableOpacity onPress={()=>handleCrossIconPress(id)}><Icon name="times" size={24} color={color.secondaryHelperColor} /></TouchableOpacity>
      </View>
      <Image
        style={styles.feedImage}
        source={{
          uri: image
        }}
        resizeMode="cover"></Image>
      <Text style={{color: color.secondaryColor, fontSize: 16}}>
       {name}
      </Text>
      <Text style={{fontSize: 12, marginBottom: 7}}>{level}</Text>
      <Button type="Connect" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderColor: color.secondaryHelperColor,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginRight: 15,
    // height: 150,
    position: 'relative',
  },
  feedImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Card;
