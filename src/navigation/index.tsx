import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import MovieDetailsScreen from '../screens/details/MovieDetailsScreen';
import {TRootStackParams} from '../types/NavigationProps';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/favorites/FavoriteScreen';

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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
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
