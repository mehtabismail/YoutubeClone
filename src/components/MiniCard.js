import React from 'react';
import { Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MiniCard = (props)=>{
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("videoPlayer",{videoId:props.videoId,title:props.title})}>
            <View style={{padding:5,paddingBottom:0, flexDirection:"row"}}>
                <Image 
                //source={{uri:`https://i.ytimg/vi/${props.videoId}/default.jpg`}}
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                
                style={{width:"40%", height:100}}
                />
                <View style={{marginLeft:10}}>
                    <Text 
                        style={{fontSize:20, width:Dimensions.get("screen").width/2}} 
                        ellipsizeMode="tail" 
                        numberOfLines={3}
                    >
                        {props.title}
                    </Text>
                    <Text>
                        {props.channel}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
        
    )
}

export default MiniCard