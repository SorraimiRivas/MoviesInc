import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 4,
    color: 'white',
  },
  character: {
    fontSize: 10,
    color: '#ffffffdf',
    textAlign: 'left',
  },
  characterInfo: {
    width: 100,
    height: 60,
    left: 4,
  },
});

export default styles;
