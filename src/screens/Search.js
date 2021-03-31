import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, FlatList } from 'react-native';
import Constants from 'expo-constants'
import {Ionicons} from '@expo/vector-icons'
import {useSelector, useDispatch} from 'react-redux';

import MiniCard from '../components/MiniCard'


export default function Search({navigation}) {

    const [value, setValue] = useState("")
    //const [miniCardData, setminiCardData] = useState([])
    const [loading, setLoading] = useState(false)
    const miniCardData = useSelector(state=>{
      return state;
    })
    const setminiCardData = useDispatch()

    const fetchData =()=>{
      setLoading(true)
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyCmjGRMvpFjdqPqG0IVWXwcshvoP-ZMVCk
      `).then(res=>res.json())
      .then(data=>{
        setLoading(false)
        //setminiCardData(data.items )
        setminiCardData({type:"ADD", payload:data.items} )
      })
    }
  return (
      <View style={{flex:1}}>
        <View style={styles.headerView}>
            <View style={{ margin:7, flexDirection:"row"}}>
            <Ionicons name="md-arrow-back" size={32} color="black" onPress={()=>navigation.goBack()} />
            </View>
        <View style={{margin:6, flexDirection:"row"}}>
            <TextInput 
            style={{width:"80%"}}
            value={value}
            backgroundColor="#cccaca"
            onChangeText={(Text)=>setValue(Text)} />
            <View style={{ marginLeft:20}}>
                <Ionicons 
                name="md-send" 
                size={32} 
                color="black" 
                onPress={()=>fetchData()}
                />
            </View>
        </View>
        </View>
        {loading ?<ActivityIndicator style={{margin:10}} size="large" color="blue" />:null}
        <FlatList 
        data={miniCardData}
        renderItem={({item})=>{
          return <MiniCard 
          videoId={item.id.videoId}
          title={item.snippet.title}
          channel={item.snippet.channelTitle}
          />
        }}
        keyExtractor={item=>item.id.videoId}
        />
    </View>
  
  );
}

const styles = StyleSheet.create({
  headerView:{
      marginTop:Constants.statusBarHeight,
      height:45,
      backgroundColor:"white",
      flexDirection:"row",
      //elevation work only in android in ios you have to set shadowoffset,shadow oppacity & shadow color
      elevation:5
  }
});
