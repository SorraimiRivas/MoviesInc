import {StackScreenProps} from '@react-navigation/stack';

export type TRootStackParams = {
  Home: undefined;
  Details: {
    id: number;
  };
  onPress: () => void;
};

export type TNavProps = StackScreenProps<TRootStackParams, 'Home', 'Details'>;
