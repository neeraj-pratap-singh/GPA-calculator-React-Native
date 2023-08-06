import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ButtonProps {
  title: string;
  onPress: () => void;
  iconName?: 'delete' | 'add'; // define other keys if needed
}

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  onPress,
  iconName,
}) => {
  const { darkMode: isDark } = useTheme();

  const buttonColor = '#ADD8E6'; // Light blue color
  const textColor = '#000';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: buttonColor }]}
    >
      {iconName && renderIcon(iconName)}
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const renderIcon = (name: 'delete' | 'add') => {
  let iconName = '';

  switch (name) {
    case 'delete':
      iconName = 'trash';
      break;
    case 'add':
      iconName = 'plus';
      break;
  }

  return (
    <FontAwesome name={iconName} size={20} color="#000" style={styles.icon} />
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', // to display icon and text side by side
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
  icon: {
    marginRight: 10, // for spacing between icon and text
  },
});

export default ButtonComponent;
