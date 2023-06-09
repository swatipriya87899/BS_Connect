import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import {color} from '../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Hr from './Hr';
import Button from './Button';

const ChatComp = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          marginHorizontal: 20,
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image
            style={styles.feedImage}
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}></Image>

          {/* Name & Degree Level */}
          <View style={{marginHorizontal: 15, marginTop: 10}}>
            <Text style={styles.feedName}>Divya Gupta</Text>
            <Text style={styles.feedLevel}>Diploma Level</Text>
          </View>
        </View>

        {/* phone call & video call feature */}
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Icon
            name="phone"
            size={24}
            solid={true}
            color={color.secondaryColor}
          />
          <Icon
            style={{marginHorizontal: 10}}
            name="video-camera"
            size={24}
            solid={true}
            color={color.secondaryColor}
          />
        </View>
      </View>
      <Hr />

      {/* Message box */}
      <View style={{display: 'flex', alignItems: 'center', position:'absolute', bottom:10, width:'100%'}}>
        <TextInput style={styles.chatbox} placeholder="Message..."></TextInput>
        <View style={{position:'absolute', bottom:12,right:39}}><Icon name="send" size={20} color="black" /></View>
        <View style={{position:'absolute', bottom:70,left:20}}><Button type="Hey I am Divya.I need ur help "/></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  feedImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 7,
  },
  feedName: {
    fontSize: 16,
    color: color.secondaryColor,
  },
  feedLevel: {
    fontSize: 14,
  },
  chatbox: {
    backgroundColor: '#DDD8D8',
    borderRadius: 10,
    width: '90%',
    paddingLeft: 40,
  },
});

export default ChatComp;
