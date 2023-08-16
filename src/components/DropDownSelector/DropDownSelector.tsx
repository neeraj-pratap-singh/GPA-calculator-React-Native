import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

interface DropDownSelectorProps {
  items: { label: string; value: string }[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder: string;
}

const DropDownSelector: React.FC<DropDownSelectorProps> = ({
  items,
  value,
  onChange,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(!open)} style={styles.row}>
        <Text>{value || placeholder}</Text>
        <Icon name={open ? 'chevron-up' : 'chevron-down'} size={20} />
      </TouchableOpacity>
      <Modal visible={open} transparent onRequestClose={() => setOpen(false)}>
        <View style={styles.modalContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={callback => {
              const selectedValue = callback(items);
              onChange(selectedValue);
            }}
            placeholder={placeholder}
            containerStyle={styles.dropdownContainer}
            dropDownDirection="AUTO"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  dropdownContainer: {
    width: '90%',
    height: 60,
  },
});

export default DropDownSelector;
