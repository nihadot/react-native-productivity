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
 * Props for the InputField component.
 */
type InputFieldProps = {
  /**
   * Optional label to display above the input.
   */
  label?: string;

  /**
   * Custom style for the container view.
   */
  containerStyle?: ViewStyle;

  /**
   * Custom style for the label text.
   */
  labelStyle?: TextStyle;

  /**
   * Custom style for the input field.
   */
  inputStyle?: TextStyle;
} & TextInputProps;

/**
 * A customizable and reusable text input component with an optional label.
 *
 * Example usage:
 * ```tsx
 * <InputField
 *   label="Name"
 *   placeholder="Enter your name"
 *   value={name}
 *   onChangeText={setName}
 * />
 * ```
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
