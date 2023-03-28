import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';

const RatingModal = ({visible, onClose}) => {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    // Submit the rating to the server or perform some other action
    console.log(`Submitted rating: ${rating}`);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Rate this Movie</Text>
          <Rating
            type="star"
            ratingBackground="transparent"
            ratingCount={10}
            imageSize={35}
            fractions={1}
            startingValue={rating}
            onFinishRating={setRating}
            showRating
            showReviews
            tintColor="#0d253f"
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleCancel}
              style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RatingModal;
