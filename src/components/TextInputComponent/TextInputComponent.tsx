// TextInputComponent.tsx
import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';

interface TextInputComponentProps {
  value?: string;
  onChange?: (text: string) => void;
  style?: {};
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  value,
  onChange,
  style,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder="Enter course"
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width * (1 / 2.8),
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 10, // Padding for the text inside the TextInput
    paddingVertical: 5, // Padding for the text inside the TextInput
    borderBottomWidth: 1, // Only the bottom border
    borderColor: '#ccc', // Border color
  },
});

export default TextInputComponent;
