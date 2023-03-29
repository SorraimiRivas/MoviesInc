import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import MovieDetails from '../screens/details/MovieDetails';
import {TRootStackParams} from '../types/NavigationProps';

const Stack = createStackNavigator<TRootStackParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
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
          component={MovieDetails}
          options={{
            headerStyle: {
              backgroundColor: '#0d253f',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
