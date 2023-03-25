import {StackScreenProps} from '@react-navigation/stack';
export type RootStackParams = {
  Home: undefined;
  Details: undefined;
  onPress: () => void;
};

export type Props = StackScreenProps<RootStackParams, 'Home'>;
