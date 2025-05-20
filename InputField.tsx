import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

/**
 * Props for the InputField component
 */
type InputFieldProps = {
  /**
   * Optional label text displayed above the input
   */
  label?: string;

  /**
   * Custom style for the container View
   */
  containerStyle?: ViewStyle;

  /**
   * Custom style for the label Text
   */
  labelStyle?: TextStyle;

  /**
   * Custom style for the TextInput field
   */
  inputStyle?: TextStyle;
} & TextInputProps;

/**
 * A customizable and reusable input field with label support for React Native.
 *
 * @param {string} label - Optional label shown above the input
 * @param {string} placeholder - Placeholder text for the input field
 * @param {string} value - Current value of the input
 * @param {function} onChangeText - Function to handle text change
 * @param {string} keyboardType - Keyboard type (default, numeric, etc.)
 * @param {object} containerStyle - Custom style for the wrapper View
 * @param {object} labelStyle - Custom style for the label Text
 * @param {object} inputStyle - Custom style for the TextInput
 *
 * @example
 * <InputField
 *   label="Email"
 *   placeholder="Enter your email"
 *   value={email}
 *   onChangeText={setEmail}
 *   keyboardType="email-address"
 * />
 */
const InputField: React.FC<InputFieldProps> = ({
  label = '',
  placeholder = '',
  value,
  onChangeText,
  keyboardType = 'default',
  containerStyle,
  labelStyle,
  inputStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}

      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="#999"
        {...rest}
      />
    </View>
  );
};

export default InputField;

/**
 * Default styling for the InputField component.
 */
const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    paddingBottom: 6,
    color: '#000',
  },
  input: {
    borderColor: '#DEDEDE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 45,
    fontSize: 12,
    color: '#666666',
    backgroundColor: '#F7F7F7',
  },
});
