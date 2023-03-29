import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 310,
    width: 160,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  imageContainer: {
    height: 245,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 16,
  },
  textContainer: {
    width: '100%',
  },
  releaseRatingContainer: {
    width: 160,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  ratingContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    right: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },

  text: {
    top: 2,
    fontSize: 12,
    color: '#ffffffdf',
  },
  rating: {
    fontSize: 12,
    color: '#ffffffdf',
    right: 6,
  },
  bookmark: {
    position: 'absolute',
    left: 130,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowColor: '#333',
  },
});
