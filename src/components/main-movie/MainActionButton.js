import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { spacing } from '@/theme';

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
    paddingVertical: spacing.s,
  },
});

const MainActionButton = ({ text, icon: Icon, onPress, active = true, ...props }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress} {...props}>
      <View style={baseStyles.container}>
        {<Icon {...baseStyles.icon} color={active ? colors.black : colors.gray} />}
        <Text style={baseStyles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainActionButton;
