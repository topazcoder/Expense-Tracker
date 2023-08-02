import axios from "axios";

const baseURL =
  "https://expense-tracker-react-na-607ff-default-rtdb.firebaseio.com";

export async function StoreExpense(expenseData) {
  const response = await axios.post(`${baseURL}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${baseURL}/expenses.json`);
  const expenses = [];
  for (const key in response.data) {
    expenses.push({
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      title: response.data[key].title,
    });
  }
  return expenses;
}

export function UpdateExpense(id, expenseData) {
  return axios.put(`${baseURL}/expenses/${id}.json`, expenseData);
}

export function DeleteExpense(id) {
  return axios.delete(`${baseURL}/expenses/${id}.json`);
}
