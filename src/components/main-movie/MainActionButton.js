import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const baseStyles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    paddingVertical: 10,
  },
});

const MainActionButton = ({ text, icon: Icon, onPress, active = true }) => {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress}>
      <View style={baseStyles.container}>
        {<Icon {...baseStyles.icon} color={active ? 'black' : 'gray'} />}
        <Text style={baseStyles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainActionButton;
