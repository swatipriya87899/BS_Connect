import React, {useState} from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {color} from '../assets/color';
import info from './../images/info.png';
import appLogo from './../images/Message-icon.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Hr from './Hr';

const Feed = ({name,level,timing, image, postImg, messages}) => {
  // Post Message
  const message =messages

  const [showFullMessage, setShowFullMessage] = useState(false);
  const words = message.split(' ');
  const limitedWords = words.slice(0, 10).join(' ');

  //For liking the post
  const [isLike, setIsLike] = useState(false);
  //like counts
  const [likeCount, setLikeCount] = useState(200);

  //comments counts
  const [comment, setComment] = useState([
    {userName: 'Rahul', comment: 'Thank You'},
    {userName: 'Lucky Singh', comment: 'Thanks a lot swati'},
  ]);

  const handleSeeMore = () => {
    setShowFullMessage(true);
  };

  return (
    <View style={styles.feed}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.feedInfo}>
          <Image
            style={styles.feedImage}
            source={{
              uri:image,
            }}></Image>
          <View style={{display: 'flex', marginLeft: 10}}>
            <Text style={styles.feedName}>{name}</Text>
            <Text style={styles.feedLevel}>{level}</Text>
            <Text style={styles.feedTiming}>{timing}</Text>
          </View>
        </View>
        <Image
          source={info}
          style={styles.infoBtn}
          resizeMode="contain"></Image>
      </View>

      {/* Post Text */}
      <>
        <Text style={{color: color.secondaryColor}}>
          {showFullMessage ? message : limitedWords + '...'}
        </Text>
        {!showFullMessage && (
          <TouchableOpacity
            onPress={handleSeeMore}
            style={styles.seeMoreButton}>
            <Text>See More</Text>
          </TouchableOpacity>
        )}

        {/* Post Image */}
      </>
      <Image
        source={{
          uri: postImg,
        }}
        style={{width: '97%', height: 266, resizeMode: 'cover'}}></Image>

      {/* Like Comment Details */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          {isLike ? (
            <Icon
              name="heart"
              size={30}
              color="#900"
              solid={false}
              onPress={() => {
                setIsLike(false);
                setLikeCount(likeCount - 1);
              }}
            />
          ) : (
            <Icon
              name="heart-o"
              size={30}
              color="#900"
              solid={false}
              onPress={() => {
                setIsLike(true);
                setLikeCount(likeCount + 1);
              }}
            />
          )}

          {/* Like Count */}
          <Text style={{marginLeft: 5}}>{likeCount} Likes</Text>
        </View>

        {/* Comment Count */}
        <Text style={{marginLeft: 5}}>{comment.length} Comment</Text>
      </View>

      <Hr />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {/* Like */}
        <View >
          <Icon name="thumbs-up" size={24} color={color.secondaryHelperColor} />
          <Text>Like</Text>
        </View>

        {/* Post Comment */}
        <View>
          <Icon5
            name="comment-dots"
            size={24}
            color={color.secondaryHelperColor}
            solid={true}
          />
          <Text>Comment</Text>
        </View>

        {/* Repost Comment */}
        <View>
          <Icon5
            name="share"
            size={24}
            color={color.secondaryHelperColor}
            solid={true}
          />
          <Text>Repost</Text>
        </View>

        {/* Send Post */}
        <View>
          <Icon5
            name="paper-plane"
            size={24}
            color={color.secondaryHelperColor}
            solid={true}
          />
          <Text>Send</Text>
        </View>
      </View>

      <Hr />
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    marginTop: 30,
  },
  feedInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  feedImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
  },
  feedName: {
    fontSize: 16,
    color: color.secondaryColor,
  },
  feedLevel: {
    fontSize: 14,
  },
  feedTiming: {
    fontSize: 12,
  },
  infoBtn: {
    width: 20,
    height: 20,
  },
});
export default Feed;
