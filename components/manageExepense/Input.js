import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

export default function Input({ label, style, textInputConfig }) {

  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiLine);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
    padding: 6,
    fontSize: 16,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiLine: {
    height: 100,
    textAlignVertical: "top",
  },
});
