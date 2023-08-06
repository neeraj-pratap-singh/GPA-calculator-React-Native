import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface HeaderComponentProps {
  title: string;
  showInfoIcon?: boolean;
  infoScreen?: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  showInfoIcon = false,
  infoScreen = 'Information',
}) => {
  const { darkMode: isDark } = useTheme();
  const navigation = useNavigation();

  const iconColor = isDark ? '#A6A4F0' : '#44427D';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('go back'), navigation.goBack();
        }}
      >
        <Icon name="arrow-back" size={30} color={iconColor} />
      </TouchableOpacity>
      <Text style={[styles.title, { color: iconColor }]}>{title}</Text>
      {showInfoIcon && (
        <TouchableOpacity
          onPress={() => {
            console.log('go back'), navigation.navigate(infoScreen);
          }}
        >
          <Icon name="information-circle" size={30} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HeaderComponent;
