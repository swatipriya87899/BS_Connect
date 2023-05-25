import React from 'react';
import { View, StyleSheet } from 'react-native';
import { color } from '../assets/color';

const Hr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hr} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hr: {
    borderBottomColor: color.secondaryColor,
    borderBottomWidth: 0.3,
    width: '90%',
    marginVertical: 0,
  },
});

export default Hr;
