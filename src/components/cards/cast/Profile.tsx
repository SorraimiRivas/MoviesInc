import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {TProfileProps} from '../../../types/ProfileTypes';
import {PROFILE_URL} from '../../../api';
import styles from './styles';

const Profile: FC<TProfileProps> = ({profile_path, name, character}) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            profile_path
              ? {uri: `${PROFILE_URL}${profile_path}`}
              : require('../../../assets/images/placeholder.jpg')
          }
        />
      </View>
      <View style={styles.characterInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.character}>{character}</Text>
      </View>
    </View>
  );
};

export default Profile;
