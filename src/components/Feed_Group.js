import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import {post} from './../assets/post'

const Feed_Group = () => {

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("https://bsconnet.free.beeceptor.com/")
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  //   // Process the retrieved data here
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  // }, []);
  
  
  
  return (
    <View>
      {console.log(posts)}
     {
       post.map((e)=><Feed name={e.name} level={e.level} timing={e.timing} image={e.image} postImg={e.postImg} messages={e.message}/>)
     }
    </View>
  );
};

export default Feed_Group;
