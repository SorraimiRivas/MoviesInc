import {View, Text, FlatList, Button} from 'react-native';
import React from 'react';
import globalStyle from '../../theme';
import {useSelector} from 'react-redux';
import Card from '../../components/cards/movie/Card';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const FavoriteScreen = () => {
  const favorites = useSelector(state => state.favorites.favorites);

  const emptyFavoriteState = () => {
    return (
      <View style={styles.emptyStateContainer}>
        <Icon name="select-search" size={80} color="white" />
        <Text style={styles.emptyStateText}>
          Such Empty! There is nothing to see here!
        </Text>
        <Text style={styles.emptyStateText}>
          Touch the bookmark icon on your favorite movies to add them to the
          list.
        </Text>
      </View>
    );
  };

  return (
    <View style={globalStyle.container}>
      <FlatList
        ListEmptyComponent={emptyFavoriteState}
        numColumns={2}
        data={favorites}
        keyExtractor={(item, index) => `${item.id + index.toString()}`}
        renderItem={({item}) => (
          <Card
            title={item.title}
            id={item.id}
            rating={item.rating}
            image={item.image}
            releaseDate={item.releaseDate}
          />
        )}
      />
    </View>
  );
};

export default FavoriteScreen;
