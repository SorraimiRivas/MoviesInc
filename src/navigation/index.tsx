import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import MovieDetails from '../screens/details/MovieDetails';
import {RootStackParams} from '../types/NavigationProps';

const Stack = createStackNavigator<RootStackParams>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
