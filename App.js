import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import VideoPlayer from './src/screens/VideoPlayer'
import {reducer} from './src/reducers/reducers';



const store = createStore(reducer);
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome =()=>{
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        } else if (route.name === 'subscribe') {
          iconName = 'subscriptions';
        } 

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="subscribe" component={Subscribe} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
