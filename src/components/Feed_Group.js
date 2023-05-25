import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import Feed from './Feed';

const Feed_Group = () => {
  const [posts, setPosts] = useState([]);


  // Fetching the api for getting posts
  useEffect(() => {
    axios.get('https://bsconnect.proxy.beeceptor.com/')
      .then(response => {
       return setPosts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <View>
    {posts.length > 0 && posts.map((e) => (
  <Feed
    name={e.name}
    level={e.level}
    timing={e.timing}
    image={e.image}
    postImg={e.postImg}
    messages={e.messages}
  />
))}

  </View>
  
  );
};

export default Feed_Group;
