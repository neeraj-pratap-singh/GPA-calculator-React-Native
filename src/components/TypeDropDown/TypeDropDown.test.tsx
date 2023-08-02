import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TypeDropDown from './TypeDropDown'; 

test('TypeDropDown selects value correctly', () => {
  const handleTypeChange = jest.fn();

  const { getByText, getByPlaceholderText } = render(
    <TypeDropDown onTypeChange={handleTypeChange} />
  );

  const dropdown = getByPlaceholderText('Select Type');

  fireEvent.press(dropdown);

  const option = getByText('AP');
  fireEvent.press(option);

  expect(handleTypeChange).toHaveBeenCalledWith('AP');
});
