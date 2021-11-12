import React, { useEffect, useState } from "react";
import {View,Button,Text,StyleSheet, ScrollView} from 'react-native';
import Cards from './Cards';
import { useSelector } from "react-redux";

export default function Profile({route,navigation}) {
  const data = useSelector(state => state.register);
  const [tiledata,setTiledata] = useState([]);
  const {refresh} = route.params;

  useEffect(() => {
    setTiledata(data);
  },[data])
 
    return (
      <ScrollView contentContainerStyle={styles.container}>
          {tiledata.length > 0?tiledata.map((item,index) => { 
           return ( <Cards key={index} likes={item.like} id={index} image={item.img} title={item.text} date={item.date} email={item.email} phone={item.number}/>)
          }):<Text style={styles.txt} >No Profiles to display</Text>
          }
      </ScrollView>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'white',
    },
    txt: {
      fontSize: 14,
    }
  });
