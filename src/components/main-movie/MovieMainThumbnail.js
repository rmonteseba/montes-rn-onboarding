import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { buildMovieDBImageURL } from '@/lib/utils/image-utils/imageUtils';

const baseStyles = StyleSheet.create({
  linearGradient: { height: '100%', width: '100%' },
});

const LINEAR_GRADIENT_COORDINATES = { start: { x: 0, y: 0.4 }, end: { x: 0, y: 1 } };

const MovieMainThumbnail = ({ path, resizeMode, imageStyles }) => {
  const { colors } = useTheme();

  return (
    <ImageBackground
      resizeMode={resizeMode}
      style={imageStyles}
      source={{ uri: buildMovieDBImageURL(path) }}
      accessibilityIgnoresInvertColors={true}
    >
      <LinearGradient
        {...LINEAR_GRADIENT_COORDINATES}
        colors={[colors.cardGradient, colors.background]}
        style={baseStyles.linearGradient}
      />
    </ImageBackground>
  );
};

export default MovieMainThumbnail;
