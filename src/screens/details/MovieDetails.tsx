import {View, Text, Button} from 'react-native';
import React, {FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TProps} from '../../types/NavigationProps';

const MovieDetails: FC<TProps> = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, title} = route.params;

  return (
    <View>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default MovieDetails;
