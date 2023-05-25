import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import appLogo from './../images/Message-icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import {color} from '../assets/color';
import LeftDrawer from './LeftDrawer';



const Header = ({navigation}) => {
  const [leftBar, setLeftBar] = useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => setLeftBar(true)}>
        <Text style={styles.appName}>BSConnect</Text>
      </TouchableOpacity>
      {/* {leftBar && <LeftDrawer/>} */}

      <TouchableOpacity onPress={() => navigation.navigate('Chat')} styles={{padding:5}}>
        <Icon5
          name="comment-dots"
          size={24}
          color={color.secondaryColor}
          solid={true}
        />
        <View style={styles.chatNotify}><Text style={{color:'white'}}>1</Text></View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:20,
    marginTop:10
  },
  appName: {
    fontSize: 25,
    color: '#000000',
  },
  logo: {
    width: 30,
    height: 30,
  },
  chatNotify:{
    width:20,
    height:20,
    backgroundColor:'red',
    borderRadius:50,
    display:'flex',
    alignItems:'center',
    position:'absolute',
    top:-7,
    left:10
  }
});

export default Header;
