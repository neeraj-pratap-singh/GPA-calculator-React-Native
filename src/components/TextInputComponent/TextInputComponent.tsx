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
      placeholderTextColor="#888"
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width * (1 / 2.9),
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#555',
  },
});

export default TextInputComponent;
