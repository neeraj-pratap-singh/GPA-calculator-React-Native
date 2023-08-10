import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  ButtonComponent,
  RowComponent,
  TypeSelector,
  HeaderComponent,
} from '../../components';
import { useTheme } from '../../hooks';

const Weighted = () => {
  const generateID = () => `${Date.now()}-${Math.random()}`;

  const [rows, setRows] = useState([
    { id: generateID(), type: 'AP', course: '', grade: 'A' },
  ]);
  const [currentType, setCurrentType] = useState('Weighted');

  const addRow = () => {
    setRows([
      ...rows,
      { id: generateID(), type: 'AP', course: '', grade: 'A' },
    ]);
  };

  const deleteRow = () => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.pop();
      setRows(newRows);
    }
  };

  const handleTypeChange = (value: string, index: number) => {
    console.log('handleTypeChange', value, index);
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
    // Perform GPA calculation logic here
    console.log('gpa data', rows);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        title="GPA Calculator"
        showInfoIcon={true}
        infoScreen="Information"
      />
      <TypeSelector onTypeChange={type => setCurrentType(type)} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerRow}>
          <Text style={styles.text}>Type</Text>
          <Text style={styles.text}>Course</Text>
          <Text style={styles.text}>Grade</Text>
        </View>
        {rows.map((row, index) => (
          <RowComponent
            key={row.id}
            onTypeChange={value => handleTypeChange(value, index)}
            onTextInputChange={value => handleTextInputChange(value, index)}
            onGradeChange={value => handleGradeChange(value, index)}
            typeValue={row.type}
            textInputValue={row.course}
            gradeValue={row.grade}
          />
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={addRow}>
            <Text style={styles.addButtonText}>Add Course</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={deleteRow}>
            <Text style={styles.addButtonText}>Delete Course</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={calculateGPA}
        style={[styles.button, { backgroundColor: '#ADD8E6' }]}
      >
        <Text style={[styles.text, { color: '#000' }]}>{'Calculate'}</Text>
      </TouchableOpacity>
      {/* <ButtonComponent title="Calculate" onPress={calculateGPA} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    marginBottom: 60, // Add space below for dropdown to show properly
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 150,
  },
  addButton: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default Weighted;
