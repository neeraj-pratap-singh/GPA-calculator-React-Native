// RowComponent.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DropDownSelector, TextInputComponent } from '../../components';

interface RowComponentProps {
  onTypeChange: (type: string) => void;
  onTextInputChange: (text: string) => void;
  onGradeChange: (grade: string) => void;
  typeValue: string;
  textInputValue: string;
  gradeValue: string;
}

const RowComponent: React.FC<RowComponentProps> = ({
  onTypeChange,
  onTextInputChange,
  onGradeChange,
  typeValue,
  textInputValue,
  gradeValue,
}) => {
  const typeItems = [
    { label: 'AP', value: 'AP' },
    { label: 'Hounors', value: 'Hounors' },
    { label: 'Regular', value: 'Regular' },
  ];

  const gradeItems = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'F', value: 'F' },
  ];

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DropDownSelector
          items={typeItems}
          value={typeValue}
          onChange={onTypeChange}
          placeholder="Type"
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInputComponent
          value={textInputValue}
          onChange={onTextInputChange}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DropDownSelector
          items={gradeItems}
          value={gradeValue}
          onChange={onGradeChange}
          placeholder="Grade"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default RowComponent;
