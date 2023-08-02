import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function LoadingOverlay() {
    return (
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
