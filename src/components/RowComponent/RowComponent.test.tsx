import React from 'react';
import { render } from '@testing-library/react-native';
import RowComponent from './RowComponent';

describe('RowComponent', () => {
  const setup = () => {
    const onTypeChangeMock = jest.fn();
    const onTextInputChangeMock = jest.fn();
    const onGradeChangeMock = jest.fn();

    const { getByTestId } = render(
      <RowComponent 
        onTypeChange={onTypeChangeMock}
        onTextInputChange={onTextInputChangeMock}
        onGradeChange={onGradeChangeMock}
        typeValue='AP'
        textInputValue='3.5'
        gradeValue='A'
      />
    );

    return {
      onTypeChangeMock,
      onTextInputChangeMock,
      onGradeChangeMock,
      DropDownSelector: getByTestId('type-dropdown'),
      textInputComponent: getByTestId('text-input-component'),
      gradeDropdown: getByTestId('grade-dropdown'),
    };
  };

  test('should render the RowComponent correctly', () => {
    const { DropDownSelector, textInputComponent, gradeDropdown } = setup();
    expect(DropDownSelector).toBeDefined();
    expect(textInputComponent).toBeDefined();
    expect(gradeDropdown).toBeDefined();
  });

  // You can add more tests to test the interaction and functionalities
});
