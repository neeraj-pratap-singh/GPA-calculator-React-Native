import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface TypeSelectorProps {
  onTypeChange: (type: 'Weighted' | 'Unweighted') => void;
}

const TypeSelector: React.FC<TypeSelectorProps> = ({ onTypeChange }) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onTypeChange(isEnabled ? 'Weighted' : 'Unweighted');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, !isEnabled && styles.highlighted]}>
        Weighted
      </Text>
      <Switch
        trackColor={{ true: '#307324', false: '#307324' }}
        thumbColor={isEnabled ? '#ADD8E6' : '#ADD8E6'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={[styles.text, isEnabled && styles.highlighted]}>
        Unweighted
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  highlighted: {
    color: 'blue',
  },
});

export default TypeSelector;
