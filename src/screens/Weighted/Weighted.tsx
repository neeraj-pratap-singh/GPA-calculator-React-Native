// Weighted.tsx
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { HeaderComponent } from '../../components';
import { ButtonComponent, RowComponent } from '../../components';
import { useTheme } from '../../hooks';

const Weighted = () => {
  const [rows, setRows] = useState([{ type: 'AP', course: '', grade: 'A' }]);

  const addRow = () => {
    console.log('add row');
    setRows([...rows, { type: 'AP', course: '', grade: 'A' }]);
  };

  const deleteRow = () => {
    console.log('delete row');
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.pop();
      setRows(newRows);
    }
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
      <ScrollView style={styles.container}>
        <View style={[styles.row, styles.header]}>
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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity style={styles.addButton} onPress={() => addRow()}>
            <Text style={styles.addButtonText}>Add Course</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => deleteRow()}
          >
            <Text style={styles.addButtonText}>Delete Course</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    backgroundColor: '#ddd', // Added a slight grey background for the header
    paddingHorizontal: 15, // Added horizontal padding
    borderRadius: 10, // Rounded corners
    margin: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  addButton: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default Weighted;
