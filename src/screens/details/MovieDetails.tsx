import {View, Text, Button} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Props} from '../../types/NavigationProps';

const MovieDetails: FC<Props> = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>MovieDetails</Text>
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MovieDetails;
