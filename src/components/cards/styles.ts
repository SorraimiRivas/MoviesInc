import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 160,
    borderRadius: 1,
    backgroundColor: 'white',
    margin: 15,
  },
  imageContainer: {
    height: 245,
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
    padding: 4,
  },
  titleRatingContainer: {
    width: 160,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  text: {
    top: 2,
    fontSize: 12,
    color: 'gray',
  },
  release: {},
  rating: {
    top: 3,
    fontSize: 12,
    color: 'gray',
    right: 6,
  },
});
