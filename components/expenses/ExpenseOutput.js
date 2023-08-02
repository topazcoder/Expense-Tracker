import { View, Text, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  let content = <Text style={styles.infoText}>No expenses found.</Text>;

  if (expenses.length > 0) {
    content = (
      <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
        <ExpensesList expenses={expenses} />
      </View>
    );
  }

  return <>{content}</>;
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  infoText: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
  },
});
