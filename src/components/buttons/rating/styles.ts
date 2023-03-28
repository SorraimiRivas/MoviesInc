import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    width: 110,
    backgroundColor: '#0d253f',
    position: 'absolute',
    top: 190,
    left: 270,
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  starContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rating: {
    fontSize: 14,
    color: '#01b4e4',
    fontWeight: 'bold',
  },
});

export default styles;
