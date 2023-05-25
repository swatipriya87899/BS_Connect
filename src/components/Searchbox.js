import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color} from '../assets/color';

const Searchbox = ({title}) => {
  const [input, setInput] = React.useState('');

  return (
    <View style={styles.searchboxContainer}>
      <Icon name="search" size={24} color={color.secondaryHelperColor} />

      <TextInput
        style={styles.searchbox}
        placeholder={title}
        value={input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: color.lightSecondaryHelperColor,
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 15,
    marginTop:10
  },

  searchbox: {
    // textAlign: "center",
    justifyContent: 'center',
    width: '85%',
    borderRadius: 8,
    paddingLeft: 20,
  },
});

export default Searchbox;
