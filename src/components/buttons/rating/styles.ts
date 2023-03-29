import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    backgroundColor: '#0d253f',
    position: 'absolute',
    top: 190,
    left: 320,
    alignItems: 'center',
    paddingHorizontal: 7,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  starContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 2,
  },
  rating: {
    fontSize: 14,
    color: 'orange',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
});

export default styles;
