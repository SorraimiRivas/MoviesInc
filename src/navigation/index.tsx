import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import MovieDetails from '../screens/details/MovieDetails';
import {TRootStackParams} from '../types/NavigationProps';

const Stack = createStackNavigator<TRootStackParams>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Movies Inc',
            headerStyle: {backgroundColor: '#01b4e4'},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
