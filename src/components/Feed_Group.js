import {View, Text} from 'react-native';
import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import {post} from './../assets/post'

const Feed_Group = () => {

    const [posts,setPosts]= useState([])

    useEffect(()=>{
        fetch("https://bsconnect.free.beeceptor.com/")
        .then(response => response.text())
        .then(text => {
          // Process the retrieved data here
          setPosts(text)
        })
        .catch(error => {
          console.error('-----',error);
        });
    },[])
  
  return (
    <View>
     {
       post.map((e)=><Feed name={e.name} level={e.level} timing={e.timing} image={e.image}/>)
     }
    </View>
  );
};

export default Feed_Group;
