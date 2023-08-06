import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TypeDropDown } from '../../components';
import { TextInputComponent } from '../../components';
import { GradeDropDown } from '../../components';

interface RowComponentProps {
  // specify the props you want to pass down to the child components
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
  textInputValue,
}) => {
  const [course, setCourse] = useState('');
  return (
    <View style={styles.container}>
      {/* <TypeDropDown onTypeChange={onTypeChange} /> */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInputComponent value={course} onChange={setCourse} />
      </View>
      {/* <GradeDropDown onGradeChange={onGradeChange} /> */}
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
