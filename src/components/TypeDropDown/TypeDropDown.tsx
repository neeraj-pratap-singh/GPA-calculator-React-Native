import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

interface TypeDropDownProps {
  onTypeChange: (item: string) => void;
}

const TypeDropDown: React.FC<TypeDropDownProps> = ({ onTypeChange }) => {
  const { t } = useTranslation(['example', 'welcome']);
  const { darkMode: isDark } = useTheme();

  const items = ['AP', 'Honours', 'Regular'].map(type => ({
    label: type,
    value: type,
  }));

  return (
    <DropDownPicker
      items={items}
      defaultValue={null}
      placeholder={t('example:selectType')}
      style={{ backgroundColor: isDark ? '#A6A4F0' : '#44427D' }}
      itemStyle={{ justifyContent: 'flex-start' }}
      dropDownStyle={{ backgroundColor: isDark ? '#A6A4F0' : '#44427D' }}
      onChangeItem={item => onTypeChange(item.value)}
    />
  );
};

export default TypeDropDown;
