import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

interface Props {
  onGradeChange: (value: string) => void;
}

const GradeDropDown: React.FC<Props> = ({ onGradeChange }) => {
  const { t } = useTranslation(['example', 'grades']);
  const { Fonts, Gutters, Layout, Colors, darkMode: isDark } = useTheme();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
  ]);

  const containerStyle = {
    borderColor: isDark ? Colors.text : Colors.border,
    ...Gutters.regularHPadding,
  };

  const textStyle = {
    color: isDark ? Colors.text : Colors.textInput,
    ...Fonts.textRegular,
  };

  const handleChange = (selectedValue: string) => {
    setValue(selectedValue);
    onGradeChange(selectedValue);
  };

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={handleChange}
      setItems={setItems}
      placeholder={t('grades:selectGrade')}
      containerStyle={[Layout.fullWidth, containerStyle]}
      style={containerStyle}
      dropDownContainerStyle={containerStyle}
      textStyle={textStyle}
    />
  );
};

export default GradeDropDown;
