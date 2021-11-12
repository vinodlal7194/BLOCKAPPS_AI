import React,{useEffect, useState} from "react";
import {View,Button,Text,SafeAreaView,TextInput,StyleSheet, Alert} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

export default function Register({ route,navigation }) {
 
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [email, onChangeMail] = useState(null);
  const [date, onChangeDate] = useState(null);
  const [data,setData] = useState([]);
  const [img,setImage] = useState(null);

  const dispatch = useDispatch();

   async function handleSubmit(){

    if(text !== null && number !== null && email !== null && date !== null){

      const img_fetch = await fetch('https://randomuser.me/api/')
                                .then(res => res.json())
                                .then((dat) => {
                                  setImage(dat.results[0].picture.thumbnail)})
                                .catch(err => console.log(err));
      const like = 0;
      //const key = uuidv4();
      data.push({text,number,email,date,img,like});


      dispatch({type:'CREATE',payload:data});
      onChangeText(null);
      onChangeNumber(null);
      onChangeMail(null);
      onChangeDate(null);
     
      Alert.alert(
        "Hi",
        "User Registered Succesfully",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }else{
     // console.log('data fields emty');
      Alert.alert(
        "",
        "Fill all the Empty Fields",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    
   
  }
 

    return (
      <SafeAreaView style={styles.main}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Enter Name"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Phone Number"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeMail}
          value={email}
          placeholder="Enter Email Address"
          keyboardType="email-address"
        />
        <TextInputMask
          type={'datetime'}
          options={
            {
              format: 'DD/MM/YYYY'
            }
          }
          value={date}
          onChangeText={onChangeDate}
          style={styles.input}
          placeholder="Date Of Birth"
        />
        <View style={styles.btn}>
          <Button title="Register" onPress={handleSubmit}/>
        </View>
        
        
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    main: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '60%',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    btn: {
      width: '30%',
    }
  });
