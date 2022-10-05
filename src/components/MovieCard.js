import { Text, View } from 'react-native';
import React from 'react';

export const MovieCard = (props) => {
  const { original_title: originalTitle } = props;
  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ textAlign: 'center' }}>{originalTitle}</Text>
      <Text style={{ textAlign: 'center' }}>Here goes the image</Text>
    </View>
  );
};
