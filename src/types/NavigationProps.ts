import { StackScreenProps } from '@react-navigation/stack';

export type TRootStackParams = {
  Home: undefined;
  Details: undefined;
  onPress: () => void;
};

export type TProps = StackScreenProps<TRootStackParams, 'Home'>;
