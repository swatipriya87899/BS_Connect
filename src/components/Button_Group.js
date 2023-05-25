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
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.button_group}>
        <Button type="All" boarder={true}/>
        <Button type="Programming"/>
        <Button type="Motivation" boarder={true}/>
        <Button type="Fun" boarder={true}/>
        <Button type="Memes" boarder={true}/>
        <Button type="Travel" boarder={true}/>
        <Button type="Hacks" boarder={true}/>
    </View>
    </ScrollView>
  )
}

export default Button_Group