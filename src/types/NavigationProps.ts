import {StackScreenProps} from '@react-navigation/stack';

export type TRootStackParams = {
  Home: undefined;
  Details: {
    item: {id: number};
    id: number;
  };
  onPress: () => void;
};

export type RouteParams = {
  params: {
    item: {
      id: number;
    };
  };
};

export type TNavProps = StackScreenProps<TRootStackParams, 'Home', 'Details'>;
