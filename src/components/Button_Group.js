import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Button from './Button'

const styles= StyleSheet.create({
    button_group:{
        display:'flex',
        flexDirection:'row',
        marginTop:19
    }
})

const Button_Group = () => {
  return (
    <ScrollView horizontal>
        <View style={styles.button_group}>
        <Button type="All"/>
        <Button type="Programming"/>
        <Button type="Motivation"/>
        <Button type="Fun"/>
        <Button type="Memes"/>
        <Button type="Travel"/>
        <Button type="Hacks"/>
    </View>
    </ScrollView>
  )
}

export default Button_Group