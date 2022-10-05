import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
  },
});

export const MovieCard = (props) => {
  const { original_title: originalTitle } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{originalTitle}</Text>
    </View>
  );
};
