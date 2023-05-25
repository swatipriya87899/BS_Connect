import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Connection from './Connection';
import axios from 'axios';
import { connections } from '../assets/connections';

const Connection_Group = ({navigation}) => {
  const [connection, setConnection] = useState([]);

  // Fetching the api for getting connections
  useEffect(() => {
    axios
      .get('https://bsconnect.proxy.beeceptor.com/connections')
      .then(response => {
        return setConnection(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

 

 

  return (
    <View>
    
      {connections.length>0 &&
        connections.map((student) => (
          <Connection
            name={student.name}
            level={student.level}
            photo={student.image}
            navigation={navigation}
          />
        ))}
    </View>
  );
};

export default Connection_Group;
