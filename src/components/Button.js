import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { color } from '../assets/color';

const styles= StyleSheet.create({
    button:{
        backgroundColor:color.primaryColor,
        height:36,
        borderRadius:15,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
        marginHorizontal:4
    },
    button_text:{
        color:color.helperColor
    }
})

const Button = ({type}) => {
  return (
    <View style={styles.button}>
        <Text style={styles.button_text}>{type}</Text>
    </View>
  )
}

export default Button