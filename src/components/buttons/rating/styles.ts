import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    width: 60,
    backgroundColor: '#0d253f',
    position: 'absolute',
    top: 190,
    left: 320,
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  starContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  rating: {
    fontSize: 14,
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default styles;
