import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { HeaderComponent } from '../../components';
import { RowComponent } from '../../components';
import { ButtonComponent } from '../../components';
import { useTheme } from '../../hooks';

const Weighted = () => {
  const [rows, setRows] = useState([{ type: 'AP', course: '', grade: 'A' }]);

  const addRow = () => {
    setRows([...rows, { type: 'AP', course: '', grade: 'A' }]);
  };

  const handleTypeChange = (value: string, index: number) => {
    let newRows = [...rows];
    newRows[index].type = value;
    setRows(newRows);
  };

  const handleTextInputChange = (value: string, index: number) => {
    let newRows = [...rows];
    newRows[index].course = value;
    setRows(newRows);
  };

  const handleGradeChange = (value: string, index: number) => {
    let newRows = [...rows];
    newRows[index].grade = value;
    setRows(newRows);
  };

  const calculateGPA = () => {
    console.log(rows);
    // Perform calculation
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        title="Weighted GPA"
        showInfoIcon={true}
        infoScreen="Information"
      />
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.text}>Type</Text>
          <Text style={styles.text}>Course</Text>
          <Text style={styles.text}>Grade</Text>
        </View>
        {rows.map((row, index) => (
          <RowComponent
            key={index}
            onTypeChange={value => handleTypeChange(value, index)}
            onTextInputChange={value => handleTextInputChange(value, index)}
            onGradeChange={value => handleGradeChange(value, index)}
            typeValue={row.type}
            textInputValue={row.course}
            gradeValue={row.grade}
          />
        ))}
        <TouchableOpacity style={styles.addButton} onPress={addRow}>
          <Text style={styles.addButtonText}>Add Row</Text>
        </TouchableOpacity>
      </ScrollView>
      <ButtonComponent title="Calculate" onPress={calculateGPA} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Weighted;
