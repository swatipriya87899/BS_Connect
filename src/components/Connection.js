import {View, Text, Image, StyleSheet} from 'react-native';
import {color} from '../assets/color';
import React from 'react';
import Button from './Button';

const Connection = ({name,level, photo}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
      <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        {/* Connection Image */}
      <Image
        style={styles.feedImage}
        source={{
          uri: photo
        }}></Image>

      <View style={{marginLeft: 10}}>
        {/* Connection Name */}
        <Text style={{color: color.secondaryColor, fontSize: 16}}>
          {name}
        </Text>

        {/* Connection Level */}
        <Text style={{fontSize: 12, marginBottom: 7}}>{level}</Text>
      </View>
      </View>

      <Button type="Message"/>
    </View>
  );
};

const styles = StyleSheet.create({
  feedImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
    marginTop:7
  },
});

export default Connection;
