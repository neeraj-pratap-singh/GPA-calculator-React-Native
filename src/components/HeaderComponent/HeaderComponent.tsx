import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface HeaderComponentProps {
  title: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title }) => {
  const { darkMode: isDark } = useTheme();
  const navigation = useNavigation();

  const iconColor = isDark ? '#A6A4F0' : '#44427D';

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={30} color={iconColor} />
      </TouchableOpacity>

      <Text style={{ color: iconColor }}>{title}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Information')}>
        <Icon name="information-circle" size={30} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
