// DropDownSelector.tsx
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

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
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={onChange}
      placeholder={placeholder}
      containerStyle={{ width: '90%', height: 60 }}
      dropDownDirection="AUTO"
    />
  );
};

export default DropDownSelector;
