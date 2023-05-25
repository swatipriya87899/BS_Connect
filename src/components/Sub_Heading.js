import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../assets/color'
import Hr from './Hr'

const Sub_Heading = ({type,hr}) => {
  return (
    <View>
      <Text style={styles.subHeading}>{type}</Text>
      {hr && <Hr/>}
    </View>
  )
}

const styles=StyleSheet.create({
    subHeading:{
        fontSize:16,
        color:color.secondaryColor,
        fontWeight:500,
        marginTop:15
    }
})

export default Sub_Heading