import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import {useSelector} from 'react-redux';
import Card from '../components/Card';


const LittleCard = ({name}) =>{
    return(
        <View style={{backgroundColor:"red", width:170,borderRadius:4, height:50, marginTop:10 }}>
            <Text style={{textAlign:"center",color:"white", marginTop:5, fontSize:22}}>
                {name}
            </Text>
        </View>
    )
}

const Explore = () =>{

    const cardData = useSelector(state=>{
        return state
    })
    return(
        <View style={{flex:1}}>
            <Header />
            <ScrollView>
                <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}}>
                    <LittleCard name="Trending"/>
                    <LittleCard name="Gaming"/>
                    <LittleCard name="News"/>
                    <LittleCard name="Songs"/>
                    <LittleCard name="Movies"/>
                    <LittleCard name="Fashion"/>
                </View>
                <Text style={{margin:8, fontSize:22,fontWeight:"bold", borderBottomWidth:1}}>
                    Trending Videos
                </Text>
                <FlatList 
                    data={cardData}
                    renderItem={({item})=>{
                    return <Card 
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
                    }}
                    keyExtractor={item=>item.id.videoId}
                    
                />
            </ScrollView>
        </View>
    )
}

export default Explore
