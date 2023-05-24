import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {color} from '../assets/color';
import Button from './Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={{position: 'absolute', right: 10, top: 10}}>
        <Icon name="times" size={24} color={color.secondaryHelperColor} />
      </View>
      <Image
        style={styles.feedImage}
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}></Image>
      <Text style={{color: color.secondaryColor, fontSize: 16}}>
        Deepak Singh
      </Text>
      <Text style={{fontSize: 12, marginBottom: 7}}>Foundation Level</Text>
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
