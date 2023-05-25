import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '../components/Header';
import Button_Group from '../components/Button_Group';
import Feed from '../components/Feed';
import Toast from 'react-native-toast-message';
import Bottombar from '../components/Bottombar';
import {color} from '../assets/color';
import Feed_Group from '../components/Feed_Group';
import LeftDrawer from '../components/LeftDrawer';

const Home = ({navigation}) => {
  // For Notify
  useEffect(() => {
    setTimeout(showToast, 30000);
  }, []);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hey Buddy',
      text2: 'Abhishek & Neha is arround you',
      autoHide: false,
      topOffset: -50,
      onPress: () => navigation.navigate('NearbyFriends'),
    });
  };

  return (
    <View>
      <View style={styles.bottombar}>
        <Bottombar navigation={navigation} />
      </View>
      <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
        <Header navigation={navigation}/>
        <Button_Group />
        <Feed_Group />
        <Bottombar />
      </ScrollView>
      <Toast style={styles.notify} />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  notify: {
    height: 500,
  },
  bottombar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: color.helperColor,
    flex: 1,
    width: '100%',
    zIndex: 3,
    paddingTop: 10,
  },
});

export default Home;
