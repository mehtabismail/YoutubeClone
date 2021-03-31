import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Header from '../components/Header';
import { WebView } from 'react-native-webview';


const VideoPlayer = ({route}) =>{
    const {videoId,title} = route.params
    
    return(
        
        <View style={{flex:1,marginTop:Constants.statusBarHeight,}}>
            <View style={{width:"100%", height:200}}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                    style={{ marginTop: 20 }}
                />
            </View>
            <Text 
            style={{fontSize:20,width:Dimensions.get("screen").width-50}}
            numberOfLines={2}
            ellipsizeMode="tail"
            >
               {title}
            </Text>
            <View style={{marginTop:10,borderBottomWidth:1}} />
            <View />
        </View>
    )
}

export default VideoPlayer
