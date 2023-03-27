import {StackScreenProps} from '@react-navigation/stack';

export type TRootStackParams = {
  Home: undefined;
  Details: undefined;
  onPress: () => void;
};

export type TNavProps = StackScreenProps<TRootStackParams, 'Home', 'Details'>;
