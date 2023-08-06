import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

interface TypeDropDownProps {
  onTypeChange?: (item: string) => void;
  defaultValue?: string;
}

const TypeDropDown: React.FC<TypeDropDownProps> = ({ onTypeChange, defaultValue }) => {
  const { t } = useTranslation(['example', 'welcome']);
  const { darkMode: isDark } = useTheme();

  // Internal state to manage value for uncontrolled usage
  const [internalValue, setInternalValue] = useState<string | null>(defaultValue || null);

  const items = ['AP', 'Honours', 'Regular'].map(type => ({
    label: type,
    value: type,
  }));

  const width = Dimensions.get('window').width / 3;

  const handleChange = (item: { label: string; value: string }) => {
    // If onTypeChange is provided, assume controlled component and notify parent
    if (onTypeChange) {
      onTypeChange(item.value);
    } else {
      // If not, update internal state
      setInternalValue(item.value);
    }
  };

  return (
    <DropDownPicker
      items={items}
      defaultValue={defaultValue || internalValue}
      placeholder={"Select Type"}
      style={{
        width: width,
        backgroundColor: isDark ? '#A6A4F0' : '#44427D'
      }}
      itemStyle={{ justifyContent: 'flex-start' }}
      dropDownStyle={{ backgroundColor: isDark ? '#A6A4F0' : '#44427D' }}
      onChangeItem={handleChange}
    />
  );
};

export default TypeDropDown;
