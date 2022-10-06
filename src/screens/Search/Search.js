import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '@/lib/utils/dimension-utils/dimensions';
import { strings } from '@/localization';

const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    alignItems: 'flex-start',
  },
  input: {
    flex: 1,
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
  },
});

const Search = () => {
  const [query, setQuery] = useState(null);

  return (
    <View style={baseStyles.container}>
      <TextInput
        onChangeText={setQuery}
        value={query}
        style={baseStyles.input}
        placeholder={strings.search.searchPlaceholder}
        accessibilityHint={strings.search.searchAccessibilityHint}
        accessibilityLabel={strings.search.searchAccessibilityLabel}
      />
    </View>
  );
};

export default Search;
