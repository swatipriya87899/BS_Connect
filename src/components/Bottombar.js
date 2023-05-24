import {View, Text,  TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

 function Bottombar({navigation}) {
  
  return (
    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
      <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Icon name="home" size={24} solid={true} color={color.secondaryColor} />
        </TouchableOpacity>
        <Text>Home</Text>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Friends')}>
        <Icon name="group" size={24} solid={true} color={color.secondaryColor} />
        <Text>Friends</Text>
      </TouchableOpacity>

      <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Post')}>
      <Icon5 name="plus-square" size={24} color={color.secondaryColor} solid={true}/>
        <Text>Post</Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity onPress={()=>navigation.navigate('NearbyFriends')}>
      <Icon5 name="map-marker-alt" size={24} color={color.secondaryColor} solid={true}/>
        <Text>Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default Bottombar