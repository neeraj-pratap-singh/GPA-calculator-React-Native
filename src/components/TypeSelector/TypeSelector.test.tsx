// TypeSelector.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TypeSelector from './TypeSelector'; // Adjust the path if needed

describe('<TypeSelector />', () => {
  const mockCallback = jest.fn();

  it('renders the texts correctly', () => {
    const { getByText } = render(<TypeSelector onTypeChange={mockCallback} />);

    expect(getByText('Weighted')).toBeTruthy();
    expect(getByText('Unweighted')).toBeTruthy();
  });

  it('calls onTypeChange with "Unweighted" when the switch is toggled off', () => {
    const { getByTestId } = render(<TypeSelector onTypeChange={mockCallback} />);

    const switchElement = getByTestId('typeSwitch');

    // Toggle the switch
    fireEvent(switchElement, 'onValueChange');

    // Check if the callback was called with the right value
    expect(mockCallback).toHaveBeenCalledWith('Unweighted');
  });

  it('calls onTypeChange with "Weighted" when the switch is toggled on', () => {
    mockCallback.mockReset(); // Reset the mock for a new test

    const { getByTestId } = render(<TypeSelector onTypeChange={mockCallback} />);
    
    const switchElement = getByTestId('typeSwitch');

    // Toggle the switch twice to ensure it's back to "on"
    fireEvent(switchElement, 'onValueChange');
    fireEvent(switchElement, 'onValueChange');

    expect(mockCallback).toHaveBeenCalledWith('Weighted');
  });
});
