import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import MovieDetailsScreen from '../screens/details/MovieDetailsScreen';
import {TRootStackParams} from '../types/NavigationProps';
import BookMarkButton from '../components/buttons/favorite/BookMarkButton';

const Stack = createStackNavigator<TRootStackParams>();

const Navigation = () => {
  const style = {
    right: 20,
  };
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
          component={MovieDetailsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0d253f',
            },
            headerTintColor: 'white',
            headerRight: () => <BookMarkButton style={style} size={30} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
