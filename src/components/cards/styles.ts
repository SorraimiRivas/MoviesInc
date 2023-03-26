import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 160,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 15,
  },
  imageContainer: {
    height: '70%',
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    height: '30%',
    width: '100%',
  },
});
