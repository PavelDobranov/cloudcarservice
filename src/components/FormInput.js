import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#dddfe2',
  },
});

const FormInput = (props) => (
  <TextInput
    {...props}
    style={styles.input}
    selectionColor="#ff6633"
    underlineColorAndroid="transparent"
  />
);

export default FormInput;
