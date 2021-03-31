import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import {Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'


export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerView}>
      <View style={{margin:7, flexDirection:"row"}}>
          <Entypo name="youtube" size={32} color="red" />
          <Text style={{margin:5, fontSize:16, fontWeight:"bold"}}>YouTube</Text>
      </View>
      <View style={{margin:7, flexDirection:"row", justifyContent:"space-around", width:150}}>
        <Ionicons name="md-videocam" size={32} color="black" />
        <Ionicons name="md-search" size={32} color="black" onPress={()=>navigation.navigate("search")} />
        <MaterialIcons name="account-circle" size={32} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView:{
      marginTop:Constants.statusBarHeight,
      height:45,
      backgroundColor:"white",
      flexDirection:"row",
      justifyContent:"space-between",
      //elevation work only in android in ios you have to set shadowoffset,shadow oppacity & shadow color
      elevation:3
  }
});
