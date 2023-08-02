import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from "../ui/Button";
import { getFormattedDate } from "../../utils/date";

export default function ExpenseForm({
  submitButtonLabel,
  onCancel,
  onSubmit,
  expenseData,
}) {
  const [inputValues, setInputValues] = useState(
    expenseData
      ? {
          amount: expenseData.amount.toString(),
          date: getFormattedDate(expenseData.date),
          title: expenseData.title,
        }
      : {
          amount: "",
          date: "",
          title: "",
        }
  );

  function inputChangedHandler(inputName, inputValue) {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputName]: inputValue,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      title: inputValues.title,
    };

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toDateString() !== "Invalid Date";
    const isTitleValid = expenseData.title.trim().length > 0;
    const isDataValid = isAmountValid && isDateValid && isTitleValid;

    if (!isDataValid) {
      if (!isAmountValid) {
        alert("Please enter a valid amount");
      } else if (!isDateValid) {
        alert("Please enter a valid date");
      } else if (!isTitleValid) {
        alert("Please enter a valid title");
      }
      return;
    }
    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "Enter amount",
            keyboardType: "decimal-pad",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />

        <Input
          label="Date"
          style={styles.rowInput}
          textInputConfig={{
            placeholder: "Enter date (YYYY-MM-DD)",
            keyboardType: "number-pad",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Title"
        textInputConfig={{
          placeholder: "Enter title",
          maxLength: 100,
          keyboardType: "default",
          multiline: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangedHandler.bind(this, "title"),
          value: inputValues.title,
        }}
      />

      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>

        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
    paddingHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
