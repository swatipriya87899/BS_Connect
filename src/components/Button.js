import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { color } from '../assets/color';



const Button = ({type,boarder}) => {
  return (
    <View style={[boarder?styles.outline:styles.button]}>
        <Text style={[boarder?styles.button_text_outline:styles.button_text_fill]}>{type}</Text>
    </View>
  )
}


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
  button_text_fill:{
      color:color.helperColor
  },
  outline:{
    borderWidth:1,
    borderColor:color.primaryColor,
    height:36,
    borderRadius:15,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20,
    marginHorizontal:4
  },
  button_text_outline:{
    color:color.primaryColor,
  }
})


export default Button