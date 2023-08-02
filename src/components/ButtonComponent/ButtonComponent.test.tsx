import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonComponent from './ButtonComponent';

test('ButtonComponent triggers onPress event correctly', () => {
  const handlePress = jest.fn();

  const { getByText } = render(
    <ButtonComponent title="Test Button" onPress={handlePress} />,
  );

  const button = getByText('Test Button');

  fireEvent.press(button);

  expect(handlePress).toHaveBeenCalled();
});
