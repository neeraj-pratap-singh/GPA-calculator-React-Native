import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../../hooks';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ title, onPress }) => {
  const { darkMode: isDark } = useTheme();

  const buttonColor = isDark ? '#A6A4F0' : '#44427D';

  return <Button title={title} onPress={onPress} color={buttonColor} />;
};

export default ButtonComponent;
