import React from "react";
import {View,Text,StyleSheet, ScrollView,Image, Pressable} from 'react-native';
import {useDispatch, useSelector } from "react-redux";

export default function Profile({id,image,title,email,phone,date,likes}) {
  const data = useSelector(state => state.register);
  const dispatch = useDispatch();

  const like = (id) => {
    const like = data[id];
    let update = {...like,like:like.like + 1};
    dispatch({type:'UPDATE',payload:update});
  }
  const dislike = (id) => {
    const dislike = data[id];
    let update = {...dislike,like:(dislike.like > 0)?dislike.like - 1 : 0}
    dispatch({type:'UPDATE',payload:update});
  }


    return (
      
    <View style={styles.main}>
        <View style={styles.banner}></View>
        <View style={styles.title}>
          <Text style={styles.titletxt}>{title}</Text>
        </View>
        <View style={styles.fields}>
          <View style={styles.icon}>
            <Image
            source={require('../images/email.png')}
            fadeDuration={0}
            style={{ width: '100%', height: '100%',resizeMode:'contain' }}
            />
          </View>
          <View style={styles.data}>
              <Text style={styles.emailtxt}>{email}</Text>
          </View>
        </View>
        <View style={styles.fields}>
            <View style={styles.icon}>
              <Image
                source={require('../images/phone.png')}
                fadeDuration={0}
                style={{ width: '100%', height: '100%',resizeMode:'contain' }}
              />
            </View>
            <View style={styles.data}>
                <Text style={styles.phonetxt}>{phone}</Text>
            </View>
        </View>
        <View style={styles.fields}>
            <View style={styles.icon}>
              <Image
                source={require('../images/birthday-cake.png')}
                fadeDuration={0}
                style={{ width: '100%', height: '100%',resizeMode:'contain' }}
              />
            </View>
            <View style={styles.data}>
               <Text style={styles.datetxt}> {date}</Text>
            </View>
        </View>
        <View style={styles.votes}>
          <Pressable style={styles.likes} onPress={() => {like(id)}}>
            <View  >
              <Image
                source={require('../images/like.png')}
                fadeDuration={0}
                style={{ width: '100%', height: '100%',resizeMode:'contain' }}
              />
            </View>
          </Pressable>
          <View style={styles.votenum}>
              <Text style={styles.voteall}>{likes} votes</Text>
          </View>
          <Pressable style={styles.dislikes} onPress={() => {dislike(id)}}>
            <View >
              <Image
                source={require('../images/dislike.png')}
                fadeDuration={0}
                style={{ width: '100%', height: '100%',resizeMode:'contain' }}
              />
            </View>
          </Pressable>
        </View>
        <View style={styles.pic}>
          <Image
          source={{uri: image}}
          fadeDuration={0}
          style={{ width: '100%', height: '100%',resizeMode:'contain' }}
          />
        </View>
      </View>
      
      
    );
  }

  const styles = StyleSheet.create({
    pic: {
      zIndex: 2,
      width: 70,
      height: 70,
      backgroundColor: 'black',
      position:'absolute',
      top: '15%',
      left:'40%',
      borderRadius: 35,
      borderWidth: 4,
      borderColor: 'white',
      overflow: 'hidden'
    },
    main: {
      width: '80%',
      height: 300,
      margin: 10,
      backgroundColor:'green',
      borderRadius: 10,
      overflow: 'hidden',
      borderColor:'black',
      borderWidth: 1,
      // shadowColor: 'black',
      // shadowRadius: 10,
      // shadowOffset: {width: 10,height: 10}
    },
    banner: {
      width: '100%',
      height: '30%',
      backgroundColor: 'purple',
    },
    title: {
      width: '100%',
      height: '25%',
      backgroundColor: 'white',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titletxt: {
      fontSize: 25,
    },
    fields: {
      width: '100%',
      height: '10%',
      backgroundColor: 'yellow',
      // borderColor:'black',
      // borderWidth: 1,
      flexDirection: 'row',
    },
    votes: {
      width: '100%',
      height: '15%',
      backgroundColor: 'white',
      // borderColor:'black',
      // borderWidth: 1,
      flexDirection: 'row',
    },
    icon: {
        width: '30%',
        height: '100%',
        backgroundColor: 'white',
        padding: 5,
    },
    data: {
        width: '70%',
        height: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        fontSize: 20
    },
    likes: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
    },
    votenum: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    dislikes: {
        flex: 1,
        backgroundColor: 'white',
        padding: 5,
    },
    voteall: {
        textAlign: 'center',
        fontSize: 20,
    }
  });
