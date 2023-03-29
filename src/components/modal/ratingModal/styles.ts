import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d253f',
    height: 700,
    width: '100%',
  },
  modalContent: {
    backgroundColor: '#0d253f',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'darkred',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 10,
  },
  submitButton: {
    backgroundColor: 'darkgreen',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;
