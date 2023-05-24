import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Bottombar from '../components/Bottombar';
import {color} from '../assets/color';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Button from '../components/Button';
import Hr from '../components/Hr';
import Header from '../components/Header';
import Sub_Heading from '../components/Sub_Heading';
// import { color } from '../assets/color';

const Post = ({navigation}) => {
  return (
    <>
    <View style={styles.post}>
      {/* Header of Post */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Icon name="times" size={24} color={color.secondaryHelperColor} />
        <Button type="post" />
      </View>

      <Hr />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View>
          <Icon name="photo" size={30} color="black" />
          <Text>Add Image</Text>
        </View>
        <View>
          <Icon name="video-camera" size={30} color="black" />
          <Text>Add Video</Text>
        </View>
        <View>
          <Icon name="file" size={30} color="black" />
          <Text>Add File</Text>
        </View>
        <View>
          <Icon5 name="ribbon" size={30} color="black" />
          <Text>Celebrate</Text>
        </View>
        <View>
          <Icon5 name="grin-tears" size={30} color="black" />
          <Text>Memes</Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 150,
        }}>
        <Sub_Heading type="What's happening ?" hr={false} />
        <Text>Express yourself in front of your community</Text>
      </View>

      
    </View>

    {/* bottombar */}
    <View style={styles.bottombar}>
    <Bottombar navigation={navigation} />
  </View>
  </>
  );
};

const styles = StyleSheet.create({
  post: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  bottombar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: color.helperColor,
    flex: 1,
    width: '100%',
    zIndex: 3,
    paddingTop: 10,
    marginTop:400
  },
});

export default Post;
