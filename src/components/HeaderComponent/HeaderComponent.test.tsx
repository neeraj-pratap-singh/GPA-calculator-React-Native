import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HeaderComponent from './HeaderComponent';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native');

test('HeaderComponent renders correctly and handles button press events', () => {
  const { getByText } = render(<HeaderComponent title="Test Header" />);

  const backButton = getByText('arrow-back');
  const infoButton = getByText('information-circle');

  const navigation = useNavigation();

  fireEvent.press(backButton);
  fireEvent.press(infoButton);

  expect(navigation.goBack).toHaveBeenCalled();
  expect(navigation.navigate).toHaveBeenCalledWith('Information');
});
