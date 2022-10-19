import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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

const MainActionButton = ({ text, icon: Icon }) => {
  return (
    <View style={baseStyles.container}>
      {<Icon {...baseStyles.icon} />}
      <Text style={baseStyles.text}>{text}</Text>
    </View>
  );
};

export default MainActionButton;
