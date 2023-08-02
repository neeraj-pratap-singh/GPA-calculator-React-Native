import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextInputComponent from './TextInputComponent';

test('TextInputComponent updates value and shows error message correctly', () => {
  const handleValueChange = jest.fn();

  const { getByPlaceholderText, getByText } = render(
    <TextInputComponent
      onValueChange={handleValueChange}
      error="Error message"
      value=""
    />,
  );

  const input = getByPlaceholderText('Enter Text');

  fireEvent.changeText(input, 'Test input');

  expect(handleValueChange).toHaveBeenCalledWith('Test input');

  const error = getByText('Error message');
  expect(error).toBeTruthy();
});
