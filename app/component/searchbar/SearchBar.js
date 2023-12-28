import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './Style';
import colors from 'const/encolor';


const SearchBar = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false);


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View>
      <View style={styles.searchView}>
        <TextInput {...props}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={colors.searchPlaceholderText}
        />
        <TouchableOpacity>
          <Image
            source={
              isFocused ?
                require('app/untils/images/logo/cancel.png')
                : require('app/untils/images/logo/search.png')

            }
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SearchBar
