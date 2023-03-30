import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import MovieDetailsScreen from '../screens/details/MovieDetailsScreen';
import {TRootStackParams} from '../types/NavigationTypes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/favorites/FavoriteScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator<TRootStackParams>();
const Tab = createBottomTabNavigator<TRootStackParams>();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Movies Inc',
          headerStyle: {
            backgroundColor: '#0d253f',
          },
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetailsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#0d253f',
          },
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#0d253f',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        showIcon: true,
      }}>
      <Tab.Screen
        name="Movies"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="film" color="orange" size={20} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          headerStyle: {
            backgroundColor: '#0d253f',
          },
          headerTintColor: 'white',
          tabBarIcon: () => <Icon name="bookmark" color="orange" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default Navigation;
