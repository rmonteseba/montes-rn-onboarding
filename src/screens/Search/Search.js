import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { baseStyles } from './Search.styles';
import { strings } from '@/localization';

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
