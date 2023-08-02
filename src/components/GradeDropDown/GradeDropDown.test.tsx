import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GradeDropDown from './GradeDropDown'; // Adjust the import path according to your project structure

test('GradeDropDown selects value correctly', () => {
  const handleGradeChange = jest.fn();

  const { getByText, getByPlaceholderText } = render(
    <GradeDropDown onGradeChange={handleGradeChange} />
  );

  const dropdown = getByPlaceholderText('Select Grade');

  fireEvent.press(dropdown);

  const option = getByText('A');
  fireEvent.press(option);

  expect(handleGradeChange).toHaveBeenCalledWith('A');
});
