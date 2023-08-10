import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import { RowComponent, TypeSelector, HeaderComponent } from '../../components';
import { useTheme } from '../../hooks';

const Weighted = () => {
  const generateID = () => `${Date.now()}-${Math.random()}`;

  const [rows, setRows] = useState([
    { id: generateID(), type: 'AP', course: '', grade: 'A' },
  ]);
  const [currentType, setCurrentType] = useState('Weighted');
  const [modalVisible, setModalVisible] = useState(false);
  const [gpaResult, setGpaResult] = useState(0.0);

  const calculateGPAValue = (grade, type) => {
    if (currentType === 'Weighted' && (type === 'AP' || type === 'Honors')) {
      switch (grade) {
        case 'A':
          return 5.0;
        case 'B':
          return 4.0;
        case 'C':
          return 3.0;
        default:
          return 0.0;
      }
    } else {
      switch (grade) {
        case 'A':
          return 4.0;
        case 'B':
          return 3.0;
        case 'C':
          return 2.0;
        default:
          return 0.0;
      }
    }
  };

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
    let total = 0;
    let count = 0;
    rows.forEach(row => {
      total += calculateGPAValue(row.grade, row.type);
      count++;
    });
    setGpaResult(count > 0 ? total / count : 0);
    setModalVisible(true);
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
      <TouchableOpacity onPress={calculateGPA} style={styles.button}>
        <Text style={styles.buttonText}>{'Calculate'}</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Your {currentType} GPA is {gpaResult.toFixed(2)}
          </Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginHorizontal: 20,
    backgroundColor: '#ADD8E6',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
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
    justifyContent: 'space-around',
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
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default Weighted;
