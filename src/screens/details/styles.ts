import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0d253f',
  },
  backdrop: {
    height: 220,
    width: '100%',
    resizeMode: 'contain',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  poster: {
    height: 150,
    width: 100,
    position: 'absolute',
    resizeMode: 'contain',
    top: 150,
    left: 30,
    borderRadius: 10,
  },
  titleContainer: {
    width: 250,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    left: 140,
    top: 10,
    color: 'white',
  },
  infoContainer: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    left: 140,
    top: 15,
  },
  calendar: {
    marginRight: 4,
  },
  release: {
    fontSize: 10,
    color: '#ffffffdf',
    fontWeight: 'bold',
  },
  genres: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 55,
  },
  subtitle: {
    marginVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  overview: {
    fontSize: 12,
    color: 'white',
  },
  separator: {
    height: 10,
    width: 1,
    marginHorizontal: 5,
  },
  overviewContainer: {
    marginHorizontal: 30,
    top: 60,
  },
  cast: {
    top: 80,
    marginHorizontal: 30,
    marginBottom: 200,
  },
  bookmark: {
    position: 'absolute',
    left: 340,
    top: -5,
  },
});

export default styles;
