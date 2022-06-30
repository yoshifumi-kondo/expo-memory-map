import { StyleSheet } from 'react-native';

export const customColor = {
  first: '#A3B4BF',
  secound: '#36403E',
  third: '#D9C49C',
  fourth: '#BFA78A',
  fifth: '#8C613B',
};

const customStyles = StyleSheet.create({
  defaultText: {
    fontFamily: 'Oswald_700Bold',
    fontStyle: 'normal',
  },
  boldText: {
    fontFamily: 'Oswald_700Bold',
  },
  largeFont: {
    fontSize: 48,
  },
  mediumFpnt: {
    fontSize: 28,
  },
  smallFont: {
    fontSize: 16,
  },
});

export default customStyles;
