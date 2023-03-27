import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  backdrop: {
    height: 220,
    width: '100%',
    resizeMode: 'contain',
    borderBottomEndRadius: 16,
    borderBottomLeftRadius: 16,
  },
  poster: {
    height: 150,
    width: 100,
    position: 'absolute',
    resizeMode: 'contain',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderTopColor: 'white',
    borderRightColor: 'white',
    top: 150,
    left: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    left: 140,
    top: 20,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    left: 140,
    top: 25,
  },

  release: {
    fontSize: 10,
    color: 'gray',
  },
  separator: {
    height: 1,
    width: 10,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  overviewContainer: {
    top: 20,
    padding: 30,
  },
});

export default styles;
