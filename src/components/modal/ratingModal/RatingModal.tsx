import React, {FC, useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-elements';
import styles from './styles';
import {TModalProps} from '../../../types/ModalTypes';
import {usePostRating} from '../../../hooks';

const RatingModal: FC<TModalProps> = ({visible, onClose, id}) => {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');

  const {postRatingRequest, sessionId} = usePostRating();

  const handleSubmit = () => {
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    // Submit the post request to the API
    postRatingRequest(id, rating, sessionId);
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
            tintColor="#0d253f"
            fractions={1}
            ratingCount={5}
            imageSize={35}
            startingValue={rating}
            onFinishRating={setRating}
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
