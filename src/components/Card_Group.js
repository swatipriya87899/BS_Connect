import {View, Text, ScrollView} from 'react-native';
import React,{useState} from 'react';
import Card from './Card';

const Card_Group = () => {
  const [student, setStudent] = useState([
    {
      name: 'Deepak Raj',
      Leve: 'Foundation Level',
    },
    {
        name: 'Payal Sinha',
        Leve: 'Diploma Level',
      },
      {
        name: 'Payal Sinha',
        Leve: 'BS Level',
      },
  ]);
  return (
    <ScrollView horizontal>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:5}}>
      {
        student.map(()=><Card></Card>
        )
      }
    </View>
    </ScrollView>
  );
};

export default Card_Group;
