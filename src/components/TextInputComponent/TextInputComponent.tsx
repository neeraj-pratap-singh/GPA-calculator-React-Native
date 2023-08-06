import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';

interface TextInputProps {
  value: string;
  onValueChange: (text: string) => void;
  error: string;
}

const TextInputComponent: React.FC<TextInputProps> = ({
  value,
  onValueChange,
  error,
}) => {
  const { t } = useTranslation(['example', 'welcome']);
  const { darkMode: isDark, Fonts } = useTheme();

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onValueChange}
        placeholder={t('example:enterText')}
        placeholderTextColor={isDark ? '#A6A4F0' : '#44427D'}
        style={{
          backgroundColor: isDark ? '#A6A4F0' : '#44427D',
          ...Fonts.textRegular,
        }}
      />
      <Text style={{ color: 'red', ...Fonts.textSmall }}>{error}</Text>
    </View>
  );
};

export default TextInputComponent;
